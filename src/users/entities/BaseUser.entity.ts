import { IUser } from '../contracts/IUser.entity';

export class BaseUser implements IUser {
  constructor(
    private userName: string,
    private email: string,
    private password: string,
    private id: string,
    private roles: string[],
    private updatedAt?: Date,
    private createdAt?: Date,
  ) {}

  getUserName(): string {
    return this.userName;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getId(): string {
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
