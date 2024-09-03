import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { IUser } from './contracts/IUser.entity';
export type UserDocument = HydratedDocument<UserMongoMapper>;

@Schema()
export class UserMongoMapper implements IUser {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  })
  _id?: any;
  @Prop({
    type: String,
    required: true,
  })
  firstName: string;
  @Prop({
    type: String,
    required: true,
  })
  lastName: string;
  @Prop({
    type: String,
    required: true,
  })
  userName: string;
  @Prop({
    type: String,
    required: true,
  })
  email: string;
  @Prop({
    type: String,
    required: true,
  })
  password: string;
  @Prop({
    type: Date,
    default: () => new Date(),
  })
  updatedAt?: Date;
  @Prop({
    type: Date,
    default: () => new Date(),
  })
  createdAt?: Date;

  getUserName(): string {
    return this.userName;
  }
  getEmail(): string {
    return this.email;
  }
  getFirstName(): string {
    return this.firstName;
  }
  getLastName(): string {
    return this.lastName;
  }
  getPassword(): string {
    return this.password;
  }
  getCreatedAt(): Date | null {
    return this.createdAt;
  }
  getUpdatedAt(): Date | null {
    return this.updatedAt;
  }
  getID() {
    return this._id;
  }
}

export const UserSchema = SchemaFactory.createForClass(UserMongoMapper);
