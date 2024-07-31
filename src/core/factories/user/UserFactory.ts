import { BaseUser } from 'src/core/entities/BaseUser';
import { IUser } from 'src/core/entities/IUser';
import { IUserFactory } from './IUserFactory';

export class UserFactory implements IUserFactory {
  createBaseUser(data: {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
  }): IUser {
    return new BaseUser(
      data.id,
      data.name,
      data.email,
      data.password,
      data.role,
    );
  }
}
