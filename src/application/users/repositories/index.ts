import { IGenericDataSource } from "../../../domain/repositories/IBase.repository";
import { IUser } from "../contracts/IUser.entity";

export interface IUserRepository extends IGenericDataSource<IUser> {
  someNewMethodToAccessUserRepo(): Promise<string>;
}

export * from "./UserMongoose.repository";
export * from "./UserTypeORM.repository";

export const USER_REPO_TOKEN = "USER_REPO_TOKEN";
