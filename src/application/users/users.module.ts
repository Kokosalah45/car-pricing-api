import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IUser } from '../../domain/interfaces/entities/IUser.entity';
import { USER_FACTORY_TOKEN } from '../../domain/interfaces/factories/IUser.factory';
import { IBaseRepository } from '../../domain/repositories/IBase.repository';
import { UserTypeORMMapper } from '../../infrastructure/data/typeorm/repositories/users/UserData.TypeORM-mapper';
import { BaseUserFactory } from './factories/BaseUser.factory';
import { USER_REPO_TOKEN, UserTypeORMRepository } from './repositories';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

// test sync
@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([UserTypeORMMapper])],

  providers: [
    UsersService,
    {
      provide: USER_REPO_TOKEN,
      useFactory: async (
        UserTypeORMRepository: UserTypeORMRepository,
        config: ConfigService,
      ): Promise<IBaseRepository<IUser>> => {
        const dataSource = config.get<string>('DATA_SOURCE');
        switch (dataSource) {
          case 'mongoose':
          case 'typeorm':
          default:
            return UserTypeORMRepository;
        }
      },
      inject: [UserTypeORMRepository, ConfigService],
    },
    {
      provide: USER_FACTORY_TOKEN,
      useClass: BaseUserFactory,
    },
    UserTypeORMRepository,
  ],
})
export class UsersModule {}
