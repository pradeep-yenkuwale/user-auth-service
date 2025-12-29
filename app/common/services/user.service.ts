/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ConfigService } from "./config.service";
import { UserModel } from "../model/user.model";
import { lastValueFrom } from "rxjs";
import { APIService } from "app/infrastructure/services/api/api.service";

@Injectable()
export class UserService {
    constructor(private readonly configService: ConfigService, private readonly apiService: APIService) { }

    userServiceBaseUrl = this.configService.getString('USER_SERVICE');

    async getUserById(userId: string): Promise<UserModel> {
        const getUserURL = `${this.userServiceBaseUrl}/user/get/${userId}`;
        const user = await lastValueFrom(this.apiService.get(getUserURL));
        return user.data;
    }
}