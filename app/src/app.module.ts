/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from '../common/common.module';
import { InfrastructureModule } from 'app/infrastructure/infrastructure.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from 'app/common/services/config.service';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from 'app/infrastructure/services/logger-middleware.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CommonModule,
    InfrastructureModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService('./.env')
    },
    AppService
  ],
  exports: [
    {
      provide: ConfigService,
      useValue: new ConfigService('./.env')
    },
    CommonModule,
    InfrastructureModule
  ]
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // Logs all routes
  }
}
