import * as express from 'express';

import {cache, iParams} from '../middleware';
import {CACHE_DURATION} from '../config';
import {getSearch} from '../vendors/themoviedb';
import {PAGE_PARAMS, SEARCH_PARAMS} from 'commonTypes/api';

const router = express.Router();

router.get(
  '/',
  cache(CACHE_DURATION),
  iParams([SEARCH_PARAMS.query]),
  (req, res) => {
    const page = res.locals[PAGE_PARAMS.page];
    const query = res.locals[SEARCH_PARAMS.query];

    getSearch(query, page)
      .then(res.send)
      .catch(err => {
        console.log(err.response.status);
        console.log('twas the night of xmass and there was a bug: ', err);
      });
  }
);

export default router;
