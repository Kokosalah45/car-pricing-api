import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IGenericDataSource } from 'src/domain/IGeneric.data-source';
import { TypeORMDsGateway } from 'src/infrastructure/data/typeorm/TypeORM.data-source';
import { IUser } from './contracts/IUser.entity';
import { USER_REPO_TOKEN, UserTypeORMRepository } from './repositories';
import { UserDataMapper } from './UserData.mapper';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserDataMapper])],
  controllers: [UsersController],
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
          case 'typeorm':
            return UserTypeORMRepository;
          default:
            throw new Error('Invalid data source');
        }
      },
      inject: [TypeORMDsGateway, ConfigService],
    },
    UserDataMapper,
  ],
})
export class UsersModule {}
