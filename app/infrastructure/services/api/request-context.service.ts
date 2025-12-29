/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';

@Injectable()
export class RequestContextService {
  constructor(private readonly cls: ClsService) {}

  setHeaders(headers: Record<string, string | string[] | undefined>) {
    this.cls.set('headers', headers);
  }

  getHeader(key: string): string | undefined {
    const headers = this.cls.get<Record<string, string | string[] | undefined>>('headers');
    const value = headers?.[key.toLowerCase()];
    return Array.isArray(value) ? value[0] : value;
  }

  getAuthorizationToken(): string | undefined {
    return this.getHeader('authorization');
  }
}