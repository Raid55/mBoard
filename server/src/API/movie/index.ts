import * as express from 'express';

import detailsRouter from './details';
import creditsRouter from './credits';
import recommendRouter from './recommend';
import similarRouter from './similar';

const router = express.Router();

router.use('/details', detailsRouter);
router.use('/credits', creditsRouter);
router.use('/recommend', recommendRouter);
router.use('/similar', similarRouter);

export default router;
