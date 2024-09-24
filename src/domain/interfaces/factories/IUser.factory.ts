import { IUser } from '../entities/IUser.entity';

export interface IUserFactory {
  create(
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    id?: string,
  ): IUser;
}

export const USER_FACTORY_TOKEN = 'USER_FACTORY_TOKEN';
