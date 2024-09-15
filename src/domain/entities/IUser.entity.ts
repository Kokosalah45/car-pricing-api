import { IBaseEntity } from "./IBase.entity";

export interface IUser extends IBaseEntity {
  getUserName(): string;
  getEmail(): string;
  getFirstName(): string;
  getLastName(): string;
  getPassword(): string;
  getCreatedAt(): Date | null;
  getUpdatedAt(): Date | null;
}
