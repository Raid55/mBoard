import * as express from 'express';
import * as morgan from 'morgan';
import * as chalk from 'chalk';

const router = express.Router();

router.use(morgan(chalk.grey('........................................')));
router.use(morgan(chalk.blue(':user-agent')));
router.use(morgan(chalk.red.bold('[:date[clf]]')));
router.use(morgan(chalk.yellow.bold('":method | :url | HTTP/:http-version"')));
router.use(
  morgan(chalk.cyan(':status | :res[content-length] | :response-time ms'))
);
router.use(morgan(chalk.grey('........................................')));
router.use(morgan(' '));

export default router;
