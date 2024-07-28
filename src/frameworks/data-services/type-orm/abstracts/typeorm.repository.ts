import { FindOptionsWhere, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { IBaseRepository } from '../../../../core/interfaces/IBaseRepository';

interface HasId {
  id: number;
}
export abstract class TypeORMBaseRepository<T extends HasId>
  implements IBaseRepository<T>
{
  constructor(private readonly entity: Repository<T>) {}

  update(entity: Partial<T>, where: FindOptionsWhere<T>) {
    return this.entity.update(where, entity as QueryDeepPartialEntity<T>);
  }
  create(entity: T) {
    return this.entity.insert(entity as QueryDeepPartialEntity<T>);
  }
  getOneBy(where: FindOptionsWhere<T>): Promise<T> {
    return this.entity.findOneBy(where);
  }

  delete(where: FindOptionsWhere<T>) {
    return this.entity.delete(where);
  }

  async getAll(): Promise<T[]> {
    return this.entity.find();
  }

  async getById(id: any): Promise<T> {
    const options: FindOptionsWhere<T> = {
      id,
    };
    return this.entity.findOneBy(options);
  }
}
