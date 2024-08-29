import { IUser } from '../contracts/IUser.entity';
import { IUserFactory } from '../contracts/IUser.factory';
import { BaseUser } from '../entities/BaseUser.entity';

export class BaseUserFactory implements IUserFactory {
  create(
    id: string,
    userName: string,
    email: string,
    password: string,
    roles: string[],
    createdAt?: Date,
    updatedAt?: Date,
  ): IUser {
    return new BaseUser(
      userName,
      email,
      '',
      '',
      password,
      id,
      roles,
      updatedAt,
      createdAt,
    );
  }
}
