import { Inject, Injectable } from '@nestjs/common';
import { IGenericRepository } from 'src/domain/IGeneric.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseUser } from './entities/BaseUser.entity';
import { USER_REPO_TOKEN } from './repositories';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPO_TOKEN)
    private readonly userDsGateway: IGenericRepository<BaseUser>,
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
