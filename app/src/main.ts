/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Replace '*' with your Flutter app's IP address for more security
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    exposedHeaders: ['Content-Length', 'X-JSON'],
    credentials: true,
  });

  await app.startAllMicroservices();

  await app.listen(process.env.APP_PORT, '0.0.0.0');
  Logger.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
