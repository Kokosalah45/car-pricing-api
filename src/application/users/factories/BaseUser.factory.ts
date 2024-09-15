import { IUser } from "../contracts/IUser.entity";
import { IUserFactory } from "../contracts/IUser.factory";
import { BaseUser } from "../entities/BaseUser.entity";

export class BaseUserFactory implements IUserFactory {
  create(
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    createdAt?: Date,
    updatedAt?: Date,
    id?: number,
  ): IUser {
    return new BaseUser(
      userName,
      firstName,
      lastName,
      email,
      password,
      updatedAt,
      createdAt,
      id,
    );
  }
}
