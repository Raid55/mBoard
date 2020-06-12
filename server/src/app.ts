import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import {fancyLog} from './middleware';
import APIRoutes from './API';

import {ENDPOINT_PRE} from 'commontypes/api';
const {api} = ENDPOINT_PRE;

const app = express();

// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// fancy logs
app.use(fancyLog);

// expose public static files
app.use(express.static(path.resolve(__dirname, 'dist')));

// register api routes
app.use(api, APIRoutes);

// serve react app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

export default app;
