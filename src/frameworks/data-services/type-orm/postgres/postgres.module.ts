import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/core/entities/User';
import {
  USER_REPOSITORY_TOKEN,
  UserRepository,
} from '../repositories/user.repository';
import { PostgresDataServices } from './postgres-data-services.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
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
