import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IGenericDataSource } from 'src/domain/interfaces/IGeneric.data-source';
import { IUser } from './contracts/IUser.entity';
import { IUserFactory } from './contracts/IUser.factory';
import { BaseUserFactory } from './factories/BaseUser.factory';
import { USER_REPO_TOKEN, UserTypeORMRepository } from './repositories';
import { UserTypeORMMapper } from './UserData.TypeORM-mapper';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

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
      ): Promise<IGenericDataSource<IUser>> => {
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
      provide: IUserFactory,
      useClass: BaseUserFactory,
    },
    UserTypeORMRepository,
  ],
})
export class UsersModule {}
