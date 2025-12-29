/* eslint-disable prettier/prettier */
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const start = Date.now();
    Logger.log(
        JSON.stringify({ metadat: req.body, method: method, url: originalUrl, startedAt: ` ${new Date().toISOString()}` }), LoggerMiddleware.name
      );
    res.on('finish', () => {
      const duration = Date.now() - start;
      Logger.log(
        JSON.stringify({ metadat: req.body, method: method, url: originalUrl,  endedAt: ` ${new Date().toISOString()}`, duration: `${duration}ms` }), LoggerMiddleware.name
      );
    });
    next();
  }
}
