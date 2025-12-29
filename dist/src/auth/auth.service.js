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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../../common/services/user.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async getTokenForUser(userId) {
        const tokens = await this.getTokens(userId, process.env.TOKEN_SECRET);
        delete tokens.userId;
        return tokens;
    }
    async refreshTokens(userId, refreshToken) {
        const user = await this.userService.getUserById(userId);
        const compare = await bcrypt.compare(refreshToken, user.refreshToken);
        if (!user || !user.refreshToken || !compare) {
            throw new common_1.UnauthorizedException('Access denied');
        }
        return await this.getTokens(userId, process.env.TOKEN_SECRET);
    }
    async getTokens(userId, secret) {
        const [access_token, refresh_token] = await Promise.all([
            this.jwtService.signAsync({ sub: userId, secret }, { expiresIn: '15m' }),
            this.jwtService.signAsync({ sub: userId, secret }, { expiresIn: '30d' }),
        ]);
        return { access_token, refresh_token, userId };
    }
    getUserByUserId(userId) {
        return this.userService.getUserById(userId);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map