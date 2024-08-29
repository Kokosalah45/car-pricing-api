import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IUserDsGateway } from './contracts/IUser.data-source';
import { InMemoryUserDsGateway } from './data-source/UserInMemory.data-source';
import { UserTypeORMDsGateway } from './data-source/UserTypORM.data-source';
import { UserDataMapper } from './UserData.mapper';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

export const USER_REPOSITORY_TOKEN = 'user-repository-token';

@Module({
  imports: [TypeOrmModule.forFeature([UserDataMapper])],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: USER_REPOSITORY_TOKEN,
      useFactory: async (
        UserTypeORMDsGateway: UserTypeORMDsGateway,
        inMemoryUserDsGateway: InMemoryUserDsGateway,
        config: ConfigService,
      ): Promise<IUserDsGateway> => {
        const dataSource = config.get<string>('DATA_SOURCE');

        switch (dataSource) {
          case 'in-memory':
            return inMemoryUserDsGateway;
          case 'typeorm':
            return UserTypeORMDsGateway;
          default:
            throw new Error('Invalid data source');
        }
      },
      inject: [UserTypeORMDsGateway, InMemoryUserDsGateway, ConfigService],
    },
    UserDataMapper,
  ],
})
export class UsersModule {}
