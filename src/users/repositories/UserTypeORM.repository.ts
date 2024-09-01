import { Inject } from '@nestjs/common';
import { TypeORMDsGateway } from 'src/domain/TypeORM.data-source';
import { Repository } from 'typeorm';
import { USER_REPO_TOKEN } from '.';
import { BaseUser } from '../entities/BaseUser.entity';

export class UserTypeORMRepository extends TypeORMDsGateway<BaseUser> {
  constructor(@Inject(USER_REPO_TOKEN) userRepo: Repository<BaseUser>) {
    super(userRepo);
  }
}
