import { IUser } from '../entities/IUser.entity';
import { IBaseRepository } from './IBase.repository';

export interface IUserRepository extends IBaseRepository<IUser> {
  someNewMethodToAccessUserRepo(): Promise<string>;
}

export const USER_REPO_TOKEN = 'USER_REPO_TOKEN';
