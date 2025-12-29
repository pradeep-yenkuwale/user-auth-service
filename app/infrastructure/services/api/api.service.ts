/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common';
// import { RequestContextService } from './request-context.service';

@Injectable()
export class APIService {
    constructor(readonly http: HttpService,) {}
    
    get(url: string, data?: any) {
        return this.http.get(url, {
            params: data
        })
    }
    post(url: string, data?: any) {
        return this.http.post(url, data)
    }
}
