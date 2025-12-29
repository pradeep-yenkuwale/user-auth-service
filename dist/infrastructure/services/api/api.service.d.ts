import { HttpService } from '@nestjs/axios';
export declare class APIService {
    readonly http: HttpService;
    constructor(http: HttpService);
    get(url: string, data?: any): import("rxjs").Observable<import("axios").AxiosResponse<any, any, {}>>;
    post(url: string, data?: any): import("rxjs").Observable<import("axios").AxiosResponse<any, any, {}>>;
}
