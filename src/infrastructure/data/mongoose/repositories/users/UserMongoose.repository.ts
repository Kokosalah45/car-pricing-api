import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from '../../../../../domain/interfaces/entities/IUser.entity';
import { IUserRepository } from '../../../../../domain/interfaces/repositories/IUser.repository';
import { UserDocument, UserMongoMapper } from './UserData.mongo-mapper';

@Injectable()
export class UserMongoRepository implements IUserRepository {
  constructor(
    @InjectModel(UserMongoMapper.name)
    private readonly userRepo: Model<UserDocument>,
  ) {}

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
