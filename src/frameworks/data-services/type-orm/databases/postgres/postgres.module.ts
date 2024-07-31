import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BaseUser } from 'src/core/entities/BaseUser';
import { PostgresDataServices } from './postgres-data-services.service';

@Module({
  imports: [TypeOrmModule.forFeature([BaseUser])],
  providers: [PostgresDataServices],
  exports: [PostgresDataServices],
})
export class PostgresModule {}
