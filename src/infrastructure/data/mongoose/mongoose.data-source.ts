import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { BaseEntity } from "../../../domain/entities/IBase.entity";
import { IGenericDataSource } from "../../../domain/repositories/IBase.repository";
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

    return {
      ...(await newEntity.save()),
      id: newEntity._id,
    };
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
    const entities = await this.entity
      .find()
      .populate(this.populateOnFind)
      .exec();
    console.log({ entities });
    return entities.map((entity) => {
      return {
        ...entity,
        id: entity._id,
      };
    });
  }
  async count(): Promise<number> {
    return this.entity.countDocuments();
  }
}
