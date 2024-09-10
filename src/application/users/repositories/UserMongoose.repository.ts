import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongooseORMGateway } from '../../../infrastructure/data/mongoose/mongoose.data-source';
import { IUser } from '../contracts/IUser.entity';
import { UserDocument, UserMongoMapper } from '../UserData.mongo-mapper';

@Injectable()
export class UserMongoRepository extends MongooseORMGateway<IUser> {
  constructor(
    @InjectModel(UserMongoMapper.name) userRepo: Model<UserDocument>,
  ) {
    super(userRepo);
  }
  // someNewMethodToAccessUserRepo(): Promise<string> {
  //   throw new Error('Method not implemented.');
  // }
}
