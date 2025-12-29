import { ConfigService } from "./config.service";
import { UserModel } from "../model/user.model";
import { APIService } from "app/infrastructure/services/api/api.service";
export declare class UserService {
    private readonly configService;
    private readonly apiService;
    constructor(configService: ConfigService, apiService: APIService);
    userServiceBaseUrl: string;
    getUserById(userId: string): Promise<UserModel>;
}
