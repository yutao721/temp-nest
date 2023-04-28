import { Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class LoggerMiddleware implements NestMiddleware<Request, Response> {
  use(req, resp: Response, next: NextFunction) {
    const startTime = Date.now();
    // resp.once('close', () => {
    //   const params =
    //     req.params && JSON.stringify(req.params) !== '{}'
    //       ? `\tParams: ${JSON.stringify(req.params)}`
    //       : '';
    //   const query =
    //     req.query && JSON.stringify(req.query) !== '{}'
    //       ? `\tQuery: ${JSON.stringify(req.query)}`
    //       : '';
    //   const body =
    //     req.body && JSON.stringify(req.body) !== '{}'
    //       ? `\tBody: ${JSON.stringify(req.body)}`
    //       : '';
    //   Logger.log(
    //     `${req.protocol.toLocaleUpperCase()}/${req.httpVersion} ${req.method} ${
    //       req.clientIp.indexOf('::ffff:') !== -1
    //         ? req.clientIp.substring(7)
    //         : req.clientIp
    //     } ${req.path}\t${params}${query}${body} +${Date.now() - startTime}ms`,
    //     'LoggerMiddleware',
    //   );
    // });
    next();
  }
}
