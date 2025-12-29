/* eslint-disable prettier/prettier */
import { Module, OnModuleInit } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { InternalAxiosRequestConfig } from 'axios';

import { HttpInterceptor } from './http-interceptor.provider';
import { RequestContextService } from './request-context.service';
import { APIService } from './api.service';

@Module({
  imports: [HttpModule],
  providers: [
    RequestContextService,
    HttpInterceptor,
    APIService,
  ],
  exports: [APIService],
})
export class AppHttpModule implements OnModuleInit {
  constructor(
    private readonly httpService: HttpService,
    private readonly httpInterceptor: HttpInterceptor,
  ) { }

  onModuleInit() {
    this.httpService.axiosRef.interceptors.request.use(
      (config: InternalAxiosRequestConfig) =>
        this.httpInterceptor.intercept(config),
    );
  }
}