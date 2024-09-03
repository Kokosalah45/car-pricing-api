import { BaseEntity } from '../abstractions/BaseEntity';

export interface IGenericDataSource<T extends BaseEntity> {
  create(entity: T): Promise<T>;
  findById(id: string): Promise<T>;
  update(id: string, entity: T): Promise<T>;
  delete(id: string): Promise<void>;
  list(): Promise<T[]>;
  count(): Promise<number>;
}
