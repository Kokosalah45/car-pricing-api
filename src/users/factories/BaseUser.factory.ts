import { IUser } from '../contracts/IUser.entity';
import { IUserFactory } from '../contracts/IUser.factory';
import { BaseUser } from '../entities/BaseUser.entity';

export class BaseUserFactory implements IUserFactory {
  create(
    id: string,
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    createdAt?: Date,
    updatedAt?: Date,
  ): IUser {
    return new BaseUser(
      userName,
      email,
      firstName,
      lastName,
      password,
      id,
      updatedAt,
      createdAt,
    );
  }
}
