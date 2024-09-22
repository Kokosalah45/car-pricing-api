import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPE_ORM_CONFIG } from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService) => configService.get(TYPE_ORM_CONFIG),
      inject: [ConfigService],
    }),
  ],
})
export class TypeOrmModuleConnection {}
