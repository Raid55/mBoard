import * as express from 'express';

import movieRouter from './movie';
import peopleRouter from './people';
import discoverRouter from './discover';
import filtersRouter from './filters';
import searchRouter from './search';

const router = express.Router();

router.use('/movie', movieRouter);
router.use('/people', peopleRouter);
router.use('/discover', discoverRouter);
router.use('/filters', filtersRouter);
router.use('/search', searchRouter);

export default router;
