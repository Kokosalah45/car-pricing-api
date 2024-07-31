import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BaseUser } from 'src/core/entities/BaseUser';
import {
  USER_REPOSITORY_TOKEN,
  UserRepository,
} from '../../repositories/user.repository';
import { PostgresDataServices } from './postgres-data-services.service';

@Module({
  imports: [TypeOrmModule.forFeature([BaseUser])],
  providers: [
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: UserRepository,
    },
    PostgresDataServices,
  ],
  exports: [PostgresDataServices],
})
export class PostgresModule {}
