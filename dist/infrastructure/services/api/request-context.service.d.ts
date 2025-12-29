import { ClsService } from 'nestjs-cls';
export declare class RequestContextService {
    private readonly cls;
    constructor(cls: ClsService);
    setHeaders(headers: Record<string, string | string[] | undefined>): void;
    getHeader(key: string): string | undefined;
    getAuthorizationToken(): string | undefined;
}
