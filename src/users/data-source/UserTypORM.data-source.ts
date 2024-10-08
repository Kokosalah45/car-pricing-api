import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IUserDsGateway } from '../contracts/IUser.data-source';
import { IUser } from '../contracts/IUser.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserDataMapper } from '../userdata.mapper';

@Injectable()
export class UserTypeORMDsGateway implements IUserDsGateway {
  constructor(private readonly entity: Repository<UserDataMapper>) {}
  create(user: CreateUserDto): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  update(user: UpdateUserDto): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<IUser[]> {
    throw new Error('Method not implemented.');
  }
  count(): Promise<number> {
    throw new Error('Method not implemented.');
  }
}
