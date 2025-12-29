"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const common_module_1 = require("../common/common.module");
const infrastructure_module_1 = require("../infrastructure/infrastructure.module");
const config_1 = require("@nestjs/config");
const config_service_1 = require("../common/services/config.service");
const auth_module_1 = require("./auth/auth.module");
const logger_middleware_service_1 = require("../infrastructure/services/logger-middleware.service");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_service_1.LoggerMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            common_module_1.CommonModule,
            infrastructure_module_1.InfrastructureModule,
            auth_module_1.AuthModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: config_service_1.ConfigService,
                useValue: new config_service_1.ConfigService('./.env')
            },
            app_service_1.AppService
        ],
        exports: [
            {
                provide: config_service_1.ConfigService,
                useValue: new config_service_1.ConfigService('./.env')
            },
            common_module_1.CommonModule,
            infrastructure_module_1.InfrastructureModule
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map