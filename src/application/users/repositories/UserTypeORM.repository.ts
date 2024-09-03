import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeORMDsGateway } from 'src/infrastructure/data/typeorm/TypeORM.data-source';
import { Repository } from 'typeorm';
import { IUser } from '../contracts/IUser.entity';
import { UserTypeORMMapper } from '../UserData.TypeORM-mapper';

@Injectable()
export class UserTypeORMRepository extends TypeORMDsGateway<IUser> {
  constructor(
    @InjectRepository(UserTypeORMMapper)
    userRepo: Repository<UserTypeORMMapper>,
  ) {
    super(userRepo);
  }
}
