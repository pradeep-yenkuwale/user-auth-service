export interface EnvConfig {
    [key: string]: string;
}
export declare class ConfigService {
    private static instance;
    private readonly env;
    constructor(filePath: string);
    static getInstance(): ConfigService;
    getString(key: string): string;
    getNumber(key: string): number;
    getBoolean(key: string): boolean;
    private validateInput;
}
declare const config: ConfigService;
export { config };
