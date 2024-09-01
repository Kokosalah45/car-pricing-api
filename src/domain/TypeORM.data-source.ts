import { Injectable } from '@nestjs/common';
import { BaseEntity } from 'src/domain/BaseEntity';
import { IGenericRepository } from 'src/domain/IGeneric.repository';
import { Repository } from 'typeorm';

@Injectable()
export class TypeORMDsGateway<T extends BaseEntity>
  implements IGenericRepository<T>
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

  async update(entity: T): Promise<T> {
    const entityToUpdate = await this.entity.findOneByOrFail({
      id: entity.id,
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
