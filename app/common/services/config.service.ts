/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import *as Joi from 'joi';

export interface EnvConfig {
    [key: string]: string;
}

export class ConfigService {
    private static instance = null;
    private readonly env: EnvConfig;

    constructor(filePath: string) {
        const configs = dotenv.parse(fs.readFileSync(filePath))
        this.env = this.validateInput(configs)
    }

    static getInstance(): ConfigService {
        if (this.instance == null) {
            this.instance = new ConfigService(`${process.env.NODE_ENV || ''}.env`)
        }
        return this.instance;
    }

    getString(key: string): string {
        return this.env[key];
    }

    getNumber(key: string): number {
        return parseFloat(this.env[key]);
    }

    getBoolean(key: string): boolean {
        return Boolean(JSON.parse(this.env[key]));
    }

    private validateInput(env: EnvConfig): EnvConfig {
        const envParseSchema: Joi.ObjectSchema = Joi.object({
            TOKEN_SECRET: Joi.string(),
            JWT_SECRET: Joi.string(),
            APP_PORT: Joi.string(),
            NODE_ENV:Joi.string(),
            USER_SERVICE:Joi.string()
        })
        const { error, value: vaidateEnvConfig } = envParseSchema.validate(env)

        if (error) {
            throw new Error(`Config validation error: ${error.message}`)
        }
        return vaidateEnvConfig;
    }
}

const config = ConfigService.getInstance()

export { config }