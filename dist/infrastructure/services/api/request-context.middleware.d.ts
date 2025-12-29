import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RequestContextService } from './request-context.service';
export declare class RequestContextMiddleware implements NestMiddleware {
    private readonly requestContext;
    constructor(requestContext: RequestContextService);
    use(req: Request, res: Response, next: NextFunction): void;
}
