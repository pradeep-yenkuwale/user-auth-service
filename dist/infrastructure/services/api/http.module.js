"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppHttpModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const http_interceptor_provider_1 = require("./http-interceptor.provider");
const request_context_service_1 = require("./request-context.service");
const api_service_1 = require("./api.service");
let AppHttpModule = class AppHttpModule {
    constructor(httpService, httpInterceptor) {
        this.httpService = httpService;
        this.httpInterceptor = httpInterceptor;
    }
    onModuleInit() {
        this.httpService.axiosRef.interceptors.request.use((config) => this.httpInterceptor.intercept(config));
    }
};
exports.AppHttpModule = AppHttpModule;
exports.AppHttpModule = AppHttpModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        providers: [
            request_context_service_1.RequestContextService,
            http_interceptor_provider_1.HttpInterceptor,
            api_service_1.APIService,
        ],
        exports: [api_service_1.APIService],
    }),
    __metadata("design:paramtypes", [axios_1.HttpService,
        http_interceptor_provider_1.HttpInterceptor])
], AppHttpModule);
//# sourceMappingURL=http.module.js.map