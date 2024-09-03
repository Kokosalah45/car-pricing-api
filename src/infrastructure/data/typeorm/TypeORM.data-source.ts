import { Injectable } from '@nestjs/common';
import { BaseEntity } from 'src/domain/abstractions/BaseEntity';
import { IGenericDataSource } from 'src/domain/interfaces/IGeneric.data-source';
import { Repository } from 'typeorm';

@Injectable()
export abstract class TypeORMDsGateway<T extends BaseEntity>
  implements IGenericDataSource<T>
{
  constructor(private readonly entity: Repository<T>) {}
  async create(entity: T): Promise<T> {
    const newEntity = this.entity.create(entity);

    return this.entity.save(newEntity);
  }
  async findById(id: any): Promise<T> {
    const entity = await this.entity.findOneByOrFail({
      id,
    });
    return entity;
  }

  async update(id: any, entity: T): Promise<T> {
    const entityToUpdate = await this.entity.findOneByOrFail({
      id,
    });

    const mergedUser = this.entity.merge(entityToUpdate, entity);
    return this.entity.save(mergedUser);
  }
  async delete(id: any): Promise<void> {
    const entity = await this.entity.findOneByOrFail({
      id,
    });

    await this.entity.remove(entity);
  }
  async list(): Promise<T[]> {
    return this.entity.find();
  }
  async count(): Promise<number> {
    return this.entity.count();
  }
}
