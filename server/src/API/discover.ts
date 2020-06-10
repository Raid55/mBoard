import * as express from 'express';

import {cache, iParams} from '../middleware';
import {CACHE_DURATION} from '../config';
import {
  // getDiscover,
  getTopRatedMovies,
  getTrendingMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
} from '../vendors/themoviedb';

const router = express.Router();

// router.get('/', cache(CACHE_DURATION), qCheck(), (req, res) => {
//   // const {page} = res.locals.q;

//   getDiscover()
//     .then(res.send)
//     .catch((err: any) => {
//       console.log(err.response.status);
//       console.log('twas the night of xmass and there was a bug: ', err);
//     });
// });

router.get('/top_rated', cache(CACHE_DURATION), iParams(), (req, res) => {
  const {page} = res.locals.q;

  getTopRatedMovies(page)
    .then(res.send)
    .catch((err: any) => {
      console.log(err.response.status);
      console.log('twas the night of xmass and there was a bug: ', err);
    });
});
router.get('/trending', cache(CACHE_DURATION), iParams(), (req, res) => {
  const {page} = res.locals.q;

  getTrendingMovies(page)
    .then(res.send)
    .catch((err: any) => {
      console.log(err.response.status);
      console.log('twas the night of xmass and there was a bug: ', err);
    });
});
router.get('/now_playing', cache(CACHE_DURATION), iParams(), (req, res) => {
  const {page} = res.locals.q;

  getNowPlayingMovies(page)
    .then(res.send)
    .catch((err: any) => {
      console.log(err.response.status);
      console.log('twas the night of xmass and there was a bug: ', err);
    });
});
router.get('/upcoming', cache(CACHE_DURATION), iParams(), (req, res) => {
  const {page} = res.locals.q;

  getUpcomingMovies(page)
    .then(res.send)
    .catch((err: any) => {
      console.log(err.response.status);
      console.log('twas the night of xmass and there was a bug: ', err);
    });
});

export default router;
