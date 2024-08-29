import { Inject, Injectable } from '@nestjs/common';
import { IUserDsGateway } from './contracts/IUser.data-source';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { USER_REPOSITORY_TOKEN } from './users.module';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userDsGateway: IUserDsGateway,
  ) {}
  create(createUserDto: CreateUserDto) {}

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

// DI low level modules shouldt depend on high level modules but on abstractions
