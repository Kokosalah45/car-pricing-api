import { IUser } from './IUser.entity';

export interface IUserFactory {
  create(
    id: string,
    userName: string,
    email: string,
    password: string,
    roles: string[],
    createdAt?: Date,
    updatedAt?: Date,
  ): IUser;
}
