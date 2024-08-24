import { IUser } from '../entities/IUser.entity';

export interface IUserRepository {
  create(user: IUser): Promise<IUser>;
  findById(id: string): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
  update(user: IUser): Promise<IUser>;
  delete(id: string): Promise<void>;
  list(): Promise<IUser[]>;
  count(): Promise<number>;
}
