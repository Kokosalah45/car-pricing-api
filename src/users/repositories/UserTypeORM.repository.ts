import { Inject } from '@nestjs/common';
import { TypeORMDsGateway } from 'src/infrastructure/data/typeorm/TypeORM.data-source';
import { Repository } from 'typeorm';
import { USER_REPO_TOKEN } from '.';
import { IUser } from '../contracts/IUser.entity';
import { UserDataMapper } from '../UserData.mapper';

export class UserTypeORMRepository extends TypeORMDsGateway<IUser> {
  constructor(@Inject(USER_REPO_TOKEN) userRepo: Repository<UserDataMapper>) {
    super(userRepo);
  }
}
