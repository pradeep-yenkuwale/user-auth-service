import { OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { HttpInterceptor } from './http-interceptor.provider';
export declare class AppHttpModule implements OnModuleInit {
    private readonly httpService;
    private readonly httpInterceptor;
    constructor(httpService: HttpService, httpInterceptor: HttpInterceptor);
    onModuleInit(): void;
}
