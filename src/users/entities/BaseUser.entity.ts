import { IUser } from './IUser.entity';

export class BaseUser implements IUser {
  constructor(
    private userName: string,
    private email: string,
    private password: string,
    private id: string,
    private createdAt: Date,
    private updatedAt: Date,
    private roles: string[],
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

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getRoles(): string[] {
    return this.roles;
  }
}
