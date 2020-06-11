import * as express from 'express';

import movieRouter from './movie';
// import peopleRouter from './people';
import discoverRouter from './discover';
import postersRouter from './posters';
import searchRouter from './search';

import {EndpointPrefix} from 'commontypes/api';
const {movie, discover, posters, search} = EndpointPrefix;

const router = express.Router();

router.use(movie, movieRouter);
// router.use('/people', peopleRouter);
router.use(discover, discoverRouter);
router.use(posters, postersRouter);
router.use(search, searchRouter);

export default router;
