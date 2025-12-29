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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("./config.service");
const rxjs_1 = require("rxjs");
const api_service_1 = require("../../infrastructure/services/api/api.service");
let UserService = class UserService {
    constructor(configService, apiService) {
        this.configService = configService;
        this.apiService = apiService;
        this.userServiceBaseUrl = this.configService.getString('USER_SERVICE');
    }
    async getUserById(userId) {
        const getUserURL = `${this.userServiceBaseUrl}/user/get/${userId}`;
        const user = await (0, rxjs_1.lastValueFrom)(this.apiService.get(getUserURL));
        return user.data;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_service_1.ConfigService, api_service_1.APIService])
], UserService);
//# sourceMappingURL=user.service.js.map