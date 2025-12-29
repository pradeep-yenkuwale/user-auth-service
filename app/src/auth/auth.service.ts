/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'app/common/services/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async getTokenForUser(userId: string) {
    const tokens = await this.getTokens(userId, process.env.TOKEN_SECRET);
    delete tokens.userId;
    return tokens;
  }


  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.userService.getUserById(userId);
    const compare = await bcrypt.compare(refreshToken, user.refreshToken);
    if (!user || !user.refreshToken || !compare) {
      throw new UnauthorizedException('Access denied');
    }
    return await this.getTokens(userId, process.env.TOKEN_SECRET);
  }

  async getTokens(userId: string, secret: string) {
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync({ sub: userId, secret }, { expiresIn: '15m' }),
      this.jwtService.signAsync({ sub: userId, secret }, { expiresIn: '30d' }),
    ]);
    return { access_token, refresh_token, userId };
  }

  getUserByUserId(userId: string) {
    return this.userService.getUserById(userId);
  }
}