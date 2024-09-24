export class BaseUser {
  constructor(
    private userName: string,
    private email: string,
    private firstName: string,
    private lastName: string,
    private password: string,
    private id?: string,
    private updatedAt?: Date,
    private createdAt?: Date,
  ) {}
  getID(): string {
    return this.id;
  }
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
}
