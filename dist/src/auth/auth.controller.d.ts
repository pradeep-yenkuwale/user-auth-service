import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getTkenForUser(params: UserDto): Promise<{
        access_token: string;
        refresh_token: string;
        userId: string;
    }>;
    refresh(req: any, headers: Headers): Promise<{
        access_token: string;
        refresh_token: string;
        userId: string;
    }>;
    getUserId(req: any): Promise<import("../../common/model/user.model").UserModel>;
}
