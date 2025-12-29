"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.ConfigService = void 0;
const dotenv = require("dotenv");
const fs = require("fs");
const Joi = require("joi");
class ConfigService {
    constructor(filePath) {
        const configs = dotenv.parse(fs.readFileSync(filePath));
        this.env = this.validateInput(configs);
    }
    static getInstance() {
        if (this.instance == null) {
            this.instance = new ConfigService(`${process.env.NODE_ENV || ''}.env`);
        }
        return this.instance;
    }
    getString(key) {
        return this.env[key];
    }
    getNumber(key) {
        return parseFloat(this.env[key]);
    }
    getBoolean(key) {
        return Boolean(JSON.parse(this.env[key]));
    }
    validateInput(env) {
        const envParseSchema = Joi.object({
            TOKEN_SECRET: Joi.string(),
            JWT_SECRET: Joi.string(),
            APP_PORT: Joi.string(),
            NODE_ENV: Joi.string(),
            USER_SERVICE: Joi.string()
        });
        const { error, value: vaidateEnvConfig } = envParseSchema.validate(env);
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return vaidateEnvConfig;
    }
}
exports.ConfigService = ConfigService;
ConfigService.instance = null;
const config = ConfigService.getInstance();
exports.config = config;
//# sourceMappingURL=config.service.js.map