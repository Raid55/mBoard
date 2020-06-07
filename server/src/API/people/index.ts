import * as express from 'express';

import detailsRouter from './details';
import movieCreditsRouter from './movieCredits';

const router = express.Router();

router.use('/details', detailsRouter);
router.use('/movie_credits', movieCreditsRouter);

export default router;
