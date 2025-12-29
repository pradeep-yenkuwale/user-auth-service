/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class UserDto {

    @IsNotEmpty()
    @IsString()
    userId: string;

}
