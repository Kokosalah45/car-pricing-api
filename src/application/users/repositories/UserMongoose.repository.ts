import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from '../contracts/IUser.entity';
import { UserDocument, UserMongoMapper } from '../UserData.mongo-mapper';

import { MongooseORMGateway } from 'src/infrastructure/data/mongoose/mongoose.data-source';

@Injectable()
export class UserMongoRepository extends MongooseORMGateway<IUser> {
  constructor(
    @InjectModel(UserMongoMapper.name) userRepo: Model<UserDocument>,
  ) {
    super(userRepo);
  }
}
