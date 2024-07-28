import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/core/entities/User';
import { Repository } from 'typeorm';
import { TypeORMBaseRepository } from '../abstracts/typeorm.repository';

export class UserRepository extends TypeORMBaseRepository<User> {
  constructor(@InjectRepository(User) userRepository: Repository<User>) {
    super(userRepository);
  }
}

export const USER_REPOSITORY_TOKEN = 'USER_REPOSITORY_TOKEN';
