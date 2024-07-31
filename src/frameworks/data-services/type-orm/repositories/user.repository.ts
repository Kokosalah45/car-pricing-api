import { InjectRepository } from '@nestjs/typeorm';
import { BaseUser } from 'src/core/entities/BaseUser';
import { IUser } from 'src/core/entities/IUser';
import { Repository } from 'typeorm';
import { TypeORMBaseRepository } from '../abstracts/typeorm.repository';

export class UserRepository extends TypeORMBaseRepository<IUser> {
  constructor(@InjectRepository(BaseUser) userRepository: Repository<IUser>) {
    super(userRepository);
  }
}

export const USER_REPOSITORY_TOKEN = 'USER_REPOSITORY_TOKEN';
