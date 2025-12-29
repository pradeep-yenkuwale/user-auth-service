/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InternalAxiosRequestConfig } from 'axios';
import { RequestContextService } from './request-context.service';

@Injectable()
export class HttpInterceptor {
  constructor(private readonly requestContext: RequestContextService) {}

  intercept(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    const token = this.requestContext.getAuthorizationToken();

    if (
      token &&
      config.headers &&
      typeof config.headers.set === 'function'
    ) {
      config.headers.set('Authorization', token);
    }

    return config; // ✅ Return exactly what was passed in (after mutation)
  }
}