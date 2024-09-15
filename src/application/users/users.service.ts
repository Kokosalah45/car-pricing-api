import { Inject, Injectable } from '@nestjs/common';
import { IGenericDataSource } from '../../domain/repositories/IBase.repository';
import { IUser } from './contracts/IUser.entity';
import { IUserFactory, USER_FACTORY_TOKEN } from './contracts/IUser.factory';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { USER_REPO_TOKEN } from './repositories';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPO_TOKEN)
    private readonly userDsGateway: IGenericDataSource<IUser>,
    @Inject(USER_FACTORY_TOKEN)
    private readonly userFactory: IUserFactory,
  ) {}
  create(createUserDto: CreateUserDto) {
    const user = this.userFactory.create(
      createUserDto.userName,
      createUserDto.firstName,
      createUserDto.lastName,
      createUserDto.email,
      createUserDto.password,
    );

    return this.userDsGateway.create(user);
  }

  async findAll() {
    const list = await this.userDsGateway.list();
    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

// DI low level modules shouldt depend on high level modules but on abstractions
