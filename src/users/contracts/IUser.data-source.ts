import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { IUser } from './IUser.entity';

export interface IUserDsGateway {
  create(user: CreateUserDto): Promise<IUser>;
  findById(id: string): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
  update(user: UpdateUserDto): Promise<IUser>;
  delete(id: string): Promise<void>;
  list(): Promise<IUser[]>;
  count(): Promise<number>;
}
