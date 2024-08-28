import { Repository } from 'typeorm';
import { IUserDsGateway } from '../contracts/IUser.data-source';
import { IUser } from '../contracts/IUser.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDataMapper } from '../userdata.mapper';

export class UserTypeORMDsGateway implements IUserDsGateway {
  private entity: Repository<UserDataMapper>;

  constructor(entity: Repository<UserDataMapper>) {
    this.entity = entity;
  }
  async create(user: CreateUserDto) {
    return await this.entity.save({});
  }
  findById(id: string) {
    const user = this.entity.findOne({
      where: { id },
    });
    return user;
  }

  findByEmail(email: string) {
    const user = this.entity.findOne({
      where: { email },
    });

    return user;
  }
  update(user: IUser): Promise<IUser> {
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
