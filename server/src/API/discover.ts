import * as express from 'express';

import {cache, iParams} from '../middleware';
import {CACHE_DURATION} from '../config';
import {
  getDiscoverMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
} from '../vendors/themoviedb';

import {PAGE_PARAMS, DISCOVER_PARAMS, DISCOVER_FILTERS} from 'commontypes/api';

const router = express.Router();

router.get('/', cache(CACHE_DURATION), iParams(), (req, res) => {
  const page = res.locals[PAGE_PARAMS.page];
  const filter = res.locals[DISCOVER_PARAMS.filter];

  new Promise(resolve => resolve())
    .then(() => {
      console.log(filter);
      switch (filter) {
        case DISCOVER_FILTERS.trending:
          return getTrendingMovies(page);
        case DISCOVER_FILTERS.topRated:
          console.log('wadsd wkamlmwks');
          return getTopRatedMovies(page);
        case DISCOVER_FILTERS.nowPlaying:
          return getNowPlayingMovies(page);
        case DISCOVER_FILTERS.upcoming:
          return getUpcomingMovies(page);
        case DISCOVER_FILTERS.default:
        default:
          return getDiscoverMovies(page);
      }
    })
    .then(res.send)
    .catch((err: any) => {
      console.log(err.response.status);
      console.log('twas the night of xmass and there was a bug: ', err);
    });
});

export default router;
