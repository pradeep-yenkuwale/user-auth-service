/* eslint-disable prettier/prettier */
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { APIService } from './services/api/api.service';

@Module({
  imports: [
    HttpModule
  ],
  providers: [
    APIService
  ],
  exports: [
    APIService
  ]
})
export class InfrastructureModule { }