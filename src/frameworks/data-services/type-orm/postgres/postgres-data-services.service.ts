import { Inject, Injectable } from '@nestjs/common';
import {
  USER_REPOSITORY_TOKEN,
  UserRepository,
} from '../repositories/user.repository';

@Injectable()
export class PostgresDataServices {
  userRepository: UserRepository;

  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    userRepository: UserRepository,
  ) {
    this.userRepository = userRepository;
  }
}
