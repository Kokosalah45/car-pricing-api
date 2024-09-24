import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUser } from '../../../../../domain/interfaces/entities/IUser.entity';
import { IUserRepository } from '../../../../../domain/interfaces/repositories/IUser.repository';
import { UserTypeORMMapper } from './UserData.TypeORM-mapper';

@Injectable()
export class UserTypeORMRepository implements IUserRepository {
  userRepo: Repository<UserTypeORMMapper>;
  constructor(
    @InjectRepository(UserTypeORMMapper)
    userRepo: Repository<UserTypeORMMapper>,
  ) {
    this.userRepo = userRepo;
  }
  someNewMethodToAccessUserRepo(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  async create(entity: IUser): Promise<IUser> {
    const userMapper = new UserTypeORMMapper(
      entity.getFirstName(),
      entity.getLastName(),
      entity.getUserName(),
      entity.getEmail(),
      entity.getPassword(),
    );

    return await this.userRepo.save(userMapper);
  }
  findById(id: string) {
    return this.userRepo.findOne({
      where: {
        id,
      },
    });
  }
  async update(id: string, entity: IUser): Promise<void> {
    const userMapper = new UserTypeORMMapper(
      entity.getFirstName(),
      entity.getLastName(),
      entity.getUserName(),
      entity.getEmail(),
      entity.getPassword(),
    );

    await this.userRepo.update(id, userMapper);
  }
  async delete(id: string): Promise<void> {
    this.userRepo.delete(id);
  }
  list(): Promise<IUser[]> {
    return this.userRepo.find();
  }
  count(): Promise<number> {
    return this.userRepo.count();
  }
}
