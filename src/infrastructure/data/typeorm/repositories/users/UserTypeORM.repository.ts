import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUser } from '../../../../../domain/interfaces/entities/IUser.entity';
import { IUserRepository } from '../../../../../domain/interfaces/repositories/IUser.repository';
import { UserTypeORMMapper } from './UserData.TypeORM-mapper';

@Injectable()
export class UserTypeORMRepository implements IUserRepository {
  userRepo: Repository<UserTypeORMMapper>;
  constructor(
    @InjectRepository(UserTypeORMMapper)
    userRepo: Repository<UserTypeORMMapper>,
  ) {
    this.userRepo = userRepo;
  }
  someNewMethodToAccessUserRepo(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  create(entity: IUser): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  update(id: string, entity: IUser): Promise<IUser> {
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
