import { IUser } from '../../entities/IUser';

export interface IUserFactory {
  createBaseUser(data: {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
  }): IUser;
}
