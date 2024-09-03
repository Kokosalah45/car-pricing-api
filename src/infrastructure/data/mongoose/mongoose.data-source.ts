import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseEntity } from 'src/domain/abstractions/BaseEntity';
import { IGenericDataSource } from 'src/domain/interfaces/IGeneric.data-source';
@Injectable()
export abstract class MongooseORMGateway<T extends BaseEntity>
  implements IGenericDataSource<T>
{
  constructor(
    private readonly entity: Model<T>,
    private readonly populateOnFind: string[] = [],
  ) {}
  async create(entity: T): Promise<T> {
    const newEntity = new this.entity(entity);
    return newEntity.save();
  }
  async findById(id: string): Promise<T> {
    const entity = await this.entity
      .findById(id)
      .populate(this.populateOnFind)
      .exec();
    return entity;
  }
  async update(id: string, entity: T): Promise<T> {
    const entityToUpdate = await this.entity.findByIdAndUpdate(id, entity);
    return entityToUpdate;
  }
  async delete(id: string): Promise<void> {
    await this.entity.findByIdAndDelete(id);
  }
  async list(): Promise<T[]> {
    return this.entity.find().populate(this.populateOnFind).exec();
  }
  async count(): Promise<number> {
    return this.entity.countDocuments();
  }
}
