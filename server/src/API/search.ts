import * as express from 'express';

import {cache, iParams} from '../middleware';
import {CACHE_DURATION} from '../config';
import {getSearch} from '../vendors/themoviedb';
import {PageParams, SearchParams} from 'commonTypes/api';

const router = express.Router();

router.get(
  '/',
  cache(CACHE_DURATION),
  iParams([SearchParams.query]),
  (req, res) => {
    const page = res.locals[PageParams.page];
    const query = res.locals[SearchParams.query];

    getSearch(query, page)
      .then(res.send)
      .catch(err => {
        console.log(err.response.status);
        console.log('twas the night of xmass and there was a bug: ', err);
      });
  }
);

export default router;
