import * as express from 'express';

import {cache, iParams} from '../middleware';
import {CACHE_DURATION} from '../config';
// import {SearchParams} from '../../../commonTypes/API';
import {SearchParams, PageParams} from '../types/movies';
const router = express.Router();

router.get(
  '/search',
  cache(CACHE_DURATION),
  iParams([SearchParams.query]),
  (req, res) => {
    const {page, query} = res.locals;
    res.send({query, page});
  }
);

export default router;
