import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IGenericRepository } from 'src/domain/IGeneric.repository';
import { TypeORMDsGateway } from 'src/domain/TypeORM.data-source';
import { BaseUser } from '../entities/BaseUser.entity';
import { USER_REPO_TOKEN, UserTypeORMRepository } from '../repositories';
import { UserDataMapper } from '../UserData.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([UserDataMapper])],
  providers: [
    {
      provide: USER_REPO_TOKEN,
      useFactory: async (
        UserTypeORMRepository: UserTypeORMRepository,
        config: ConfigService,
      ): Promise<IGenericRepository<BaseUser>> => {
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

  exports: [USER_REPO_TOKEN],
})
export class UsersModule {}
