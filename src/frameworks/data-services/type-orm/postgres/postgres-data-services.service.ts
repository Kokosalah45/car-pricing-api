import { Inject, Injectable } from '@nestjs/common';
import {
  USER_REPOSITORY_TOKEN,
  UserRepository,
} from '../repositories/user.repository';

@Injectable()
export class PostgresDataServices {
  users: UserRepository;

  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private userRepository: UserRepository,
  ) {}
}
