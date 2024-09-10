import { BaseEntity } from '../../../domain/entities/BaseEntity';

export interface IUser extends BaseEntity {
  getUserName(): string;
  getEmail(): string;
  getFirstName(): string;
  getLastName(): string;
  getPassword(): string;
  getCreatedAt(): Date | null;
  getUpdatedAt(): Date | null;
}
