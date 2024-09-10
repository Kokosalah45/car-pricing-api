import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeORMDsGateway } from '../../../infrastructure/data/typeorm/TypeORM.data-source';
import { IUser } from '../contracts/IUser.entity';
import { UserTypeORMMapper } from '../UserData.TypeORM-mapper';

@Injectable()
export class UserTypeORMRepository extends TypeORMDsGateway<IUser> {
  userRepo: Repository<UserTypeORMMapper>;
  constructor(
    @InjectRepository(UserTypeORMMapper)
    userRepo: Repository<UserTypeORMMapper>,
  ) {
    super(userRepo);
    this.userRepo = userRepo;
  }

  async someNewMethodToAccessUserRepo() {
    this.userRepo.createQueryBuilder();
  }
}
