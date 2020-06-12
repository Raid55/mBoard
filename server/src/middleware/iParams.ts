import {Request, Response, NextFunction, RequestHandler} from 'express';

import {SEARCH_PARAMS, PAGE_PARAMS} from 'commonTypes/api';

// Params
type Params = SEARCH_PARAMS | PAGE_PARAMS;
const ParamsKeys = Object.values(Object.assign({}, SEARCH_PARAMS, PAGE_PARAMS));

type ParamsCheck = {
  [key in Params]: (query: string) => any;
};

// Params Checkers
const paramsChecks: ParamsCheck = {
  [PAGE_PARAMS.page]: (q: string) => parseInt(q) || 1,
  [SEARCH_PARAMS.query]: (q: string) => q,
};
export default function (required: Params[] = []): RequestHandler {
  return (req: Request, res: Response, next: NextFunction): void => {
    ParamsKeys.forEach(p => {
      let tmP: any;
      if (p in req.query) {
        tmP = paramsChecks[p](req.query[p] as string);
      }

      if (!tmP && p in required) console.log('bad request');
      else res.locals[p] = tmP;
    });
    next();
  };
}
