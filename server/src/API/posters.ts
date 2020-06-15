import * as express from 'express';
import * as proxy from 'express-http-proxy';

import {MOVIEDB} from '../config';

const router = express.Router();

router.use(
  '/',
  proxy(MOVIEDB.CDN_HOST, {
    proxyReqPathResolver: req => {
      return MOVIEDB.BASE_PATH + MOVIEDB.POSTER_SIZE + req.url;
    },
  })
);

export default router;
