import { IUser } from "./IUser.entity";

export interface IUserFactory {
  create(
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    createdAt?: Date,
    updatedAt?: Date,
    id?: number,
  ): IUser;
}

export const USER_FACTORY_TOKEN = "USER_FACTORY_TOKEN";
