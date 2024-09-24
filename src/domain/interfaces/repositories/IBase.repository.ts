import { IBaseEntity } from '../entities/IBase.entity';

export interface IBaseRepository<T extends IBaseEntity> {
  create(entity: T): Promise<T>;
  findById(id: string): Promise<T>;
  update(id: string, entity: T): Promise<void>;
  delete(id: string): Promise<void>;
  list(): Promise<T[]>;
  count(): Promise<number>;
}
