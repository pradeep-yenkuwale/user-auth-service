/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigService } from './services/config.service';
import { InfrastructureModule } from 'app/infrastructure/infrastructure.module';

@Module({
  imports: [
    InfrastructureModule
  ],
  providers: [
    ConfigService,
    {
      provide: ConfigService,
      useValue: new ConfigService('./.env'),
    }
  ],
  exports: [
    ConfigService,
    {
      provide: ConfigService,
      useValue: new ConfigService('./.env')
    }
  ]
})
export class CommonModule { }