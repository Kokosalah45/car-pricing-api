import { IUser } from './contracts/IUser.entity';
import { IUserFactory } from './contracts/IUser.factory';
import { BaseUser } from './entities/BaseUser.entity';

export class UserFactory implements IUserFactory {
  create(
    userName: string,
    email: string,
    password: string,
    id: string,
    roles: string[],
    createdAt: Date,
    updatedAt: Date,
  ): IUser {
    return new BaseUser(
      userName,
      email,
      password,
      id,
      roles,
      createdAt,
      updatedAt,
    );
  }
}
