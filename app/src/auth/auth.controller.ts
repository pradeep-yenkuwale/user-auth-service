/* eslint-disable prettier/prettier */
// src/auth/auth.controller.ts
import { Controller, UseGuards,Headers, Param, Get, Req, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('token/:userId')
  getTkenForUser(@Param() params: UserDto) {
    return this.authService.getTokenForUser(params.userId);
  }

  @UseGuards(AuthGuard('jwt-refresh'))
  @Post('/token/refresh')
  refresh(@Req() req: any, @Headers() headers: Headers) {
    const refresh_token = headers['authorization'].replace('Bearer ', '').trim();
    return this.authService.refreshTokens(req.user.id, refresh_token);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/user')
  getUserId(@Req() req: any) {
    return this.authService.getUserByUserId(req.user.id)
  }

}