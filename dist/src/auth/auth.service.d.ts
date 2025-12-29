import { JwtService } from '@nestjs/jwt';
import { UserService } from 'app/common/services/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    getTokenForUser(userId: string): Promise<{
        access_token: string;
        refresh_token: string;
        userId: string;
    }>;
    refreshTokens(userId: string, refreshToken: string): Promise<{
        access_token: string;
        refresh_token: string;
        userId: string;
    }>;
    getTokens(userId: string, secret: string): Promise<{
        access_token: string;
        refresh_token: string;
        userId: string;
    }>;
    getUserByUserId(userId: string): Promise<import("../../common/model/user.model").UserModel>;
}
