import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IGenericDataSource } from 'src/domain/interfaces/IGeneric.data-source';
import { IUser } from './contracts/IUser.entity';
import { IUserFactory } from './contracts/IUser.factory';
import { BaseUserFactory } from './factories/BaseUser.factory';
import { USER_REPO_TOKEN, UserTypeORMRepository } from './repositories';
import { UserMongoRepository } from './repositories/UserMongoose.repository';
import { UserMongoMapper, UserSchema } from './UserData.mongo-mapper';
import { UserTypeORMMapper } from './UserData.TypeORM-mapper';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  imports: [
    TypeOrmModule.forFeature([UserTypeORMMapper]),
    MongooseModule.forFeature([
      { name: UserMongoMapper.name, schema: UserSchema },
    ]),
  ],

  providers: [
    UsersService,
    {
      provide: USER_REPO_TOKEN,
      useFactory: async (
        UserTypeORMRepository: UserTypeORMRepository,
        UserMongoRepository: UserMongoRepository,
        config: ConfigService,
      ): Promise<IGenericDataSource<IUser>> => {
        const dataSource = config.get<string>('DATA_SOURCE');
        switch (dataSource) {
          case 'mongoose':
            return UserMongoRepository;
          case 'typeorm':
          default:
            return UserTypeORMRepository;
        }
      },
      inject: [UserTypeORMRepository, UserMongoRepository, ConfigService],
    },
    {
      provide: IUserFactory,
      useClass: BaseUserFactory,
    },
    UserTypeORMRepository,
    UserMongoRepository,
  ],
})
export class UsersModule {}
