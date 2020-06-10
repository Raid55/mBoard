import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as proxy from 'express-http-proxy';
import * as path from 'path';

import {MOVIEDB} from './config';

import {fancyLog} from './middleware';
import API from './API';

const app = express();

// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// fancy logs
app.use(fancyLog);

// expose public static files
app.use(express.static(path.resolve(__dirname, 'dist')));

// register api routes
app.use('/api', API);
// register image proxy
app.use(
  '/poster',
  proxy(MOVIEDB.CDN_HOST, {
    proxyReqPathResolver: req =>
      MOVIEDB.BASE_PATH + MOVIEDB.POSTER_SIZE + req.url,
  })
);

// serve react app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

export default app;
