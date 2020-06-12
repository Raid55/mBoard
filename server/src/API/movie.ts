import * as express from 'express';

import {cache, iParams} from '../middleware';
import {CACHE_DURATION} from '../config';
import {getFullMovie, getSimilarMovies} from '../vendors/themoviedb';

import {ENDPOINT_PRE, PAGE_PARAMS} from 'commontypes/api';
const {similar} = ENDPOINT_PRE;

const router = express.Router();

router.get('/:id', cache(CACHE_DURATION), (req, res) => {
  const {id} = req.params;

  getFullMovie(id)
    .then(res.send)
    .catch(err => {
      console.log(err.response.status);
      console.log('twas the night of xmass and there was a bug: ', err);
    });
});

router.get(`/:id${similar}`, cache(CACHE_DURATION), iParams(), (req, res) => {
  const {id} = req.params;
  const page = res.locals[PAGE_PARAMS.page];

  getSimilarMovies(id, page)
    .then(res.send)
    .catch(err => {
      console.log(err.response.status);
      console.log('twas the night of xmass and there was a bug: ', err);
    });
});

export default router;
