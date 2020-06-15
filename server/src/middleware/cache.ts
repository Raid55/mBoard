import * as NodeCache from 'node-cache';

import {Request, Response, NextFunction, RequestHandler} from 'express';

const KEY_PREFIX = '__express__';

const cacheInstance = new NodeCache();

type CachedSend<ResBody = any, T = any> = (body?: ResBody) => T;
export default function (duration: number): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const key = KEY_PREFIX + req.originalUrl || req.url;
    console.log('WASAWASWASWA: ', key);
    const cachedBody = cacheInstance.get(key);
    if (cachedBody) {
      res.set('X-Cache-TTL', (cacheInstance.getTtl(key) || -1).toString());
      res.send(cachedBody);
    } else {
      res.locals.sendResponse = res.send.bind(res);
      const cachedSend: CachedSend = body => {
        cacheInstance.set(key, body, duration);
        res.locals.sendResponse(body);
      };
      res.send = cachedSend;
      next();
    }
  };
}
