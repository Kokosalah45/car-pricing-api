import { IUser } from '../contracts/IUser.entity';

export class BaseUser implements IUser {
  constructor(
    private userName: string,
    private email: string,
    private firstName: string,
    private lastName: string,
    private password: string,
    public id: string,
    private roles: string[],
    private updatedAt?: Date,
    private createdAt?: Date,
  ) {}
  getFirstName(): string {
    return this.firstName;
  }
  getLastName(): string {
    return this.lastName;
  }

  getUserName(): string {
    return this.userName;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getID(): string {
    return this.id;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getRoles(): string[] {
    return this.roles;
  }
}
