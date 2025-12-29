declare const RefreshTokenStrategy_base: new (...args: any) => any;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    constructor();
    validate(req: any, payload: any): Promise<{
        id: any;
    }>;
}
export {};
