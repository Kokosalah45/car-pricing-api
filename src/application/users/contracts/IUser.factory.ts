import { IUser } from './IUser.entity';

export abstract class IUserFactory {
  abstract create(
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    createdAt?: Date,
    updatedAt?: Date,
    id?: number,
  ): IUser;
}
