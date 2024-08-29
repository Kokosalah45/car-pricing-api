import { IUserDsGateway } from '../contracts/IUser.data-source';
import { IUser } from '../contracts/IUser.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserDataMapper } from '../userdata.mapper';

export class InMemoryUserDsGateway implements IUserDsGateway {
  constructor(private readonly userMap: Map<string, UserDataMapper>) {}
  create(user: CreateUserDto): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  update(user: UpdateUserDto): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<IUser[]> {
    throw new Error('Method not implemented.');
  }
  count(): Promise<number> {
    throw new Error('Method not implemented.');
  }
}
