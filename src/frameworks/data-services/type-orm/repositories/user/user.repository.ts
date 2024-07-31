import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeORMBaseRepository } from '../../abstracts/typeorm.repository';
import { UserDataMapper } from './user.mapper';

export class UserTypeORMRepository extends TypeORMBaseRepository<UserDataMapper> {
  constructor(
    @InjectRepository(UserDataMapper)
    userRepository: Repository<UserDataMapper>,
  ) {
    super(userRepository);
  }
}

export const USER_TYPEORM_REPOSITORY_TOKEN = 'USER_TYPEORM_REPOSITORY_TOKEN';
