import { Inject, Injectable } from '@nestjs/common';
import {
  USER_TYPEORM_REPOSITORY_TOKEN,
  UserTypeORMRepository,
} from '../../repositories/user/user.repository';

@Injectable()
export class PostgresDataServices {
  userRepository: UserTypeORMRepository;

  constructor(
    @Inject(USER_TYPEORM_REPOSITORY_TOKEN)
    userRepository: UserTypeORMRepository,
  ) {
    this.userRepository = userRepository;
  }
}
