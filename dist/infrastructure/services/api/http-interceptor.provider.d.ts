import { InternalAxiosRequestConfig } from 'axios';
import { RequestContextService } from './request-context.service';
export declare class HttpInterceptor {
    private readonly requestContext;
    constructor(requestContext: RequestContextService);
    intercept(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig;
}
