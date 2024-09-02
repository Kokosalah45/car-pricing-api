import { BaseEntity } from './BaseEntity';

export interface IGenericDataSource<T extends BaseEntity> {
  create(entity: T): Promise<T>;
  findById(id: string): Promise<T>;
  update(entity: T): Promise<T>;
  delete(id: string): Promise<void>;
  list(): Promise<T[]>;
  count(): Promise<number>;
}
