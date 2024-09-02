import { IUser } from './IUser.entity';

export interface IUserFactory {
  create(
    id: string,
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    createdAt?: Date,
    updatedAt?: Date,
  ): IUser;
}
