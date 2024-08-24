export interface IUser {
  getUserName(): string;
  getEmail(): string;
  getPassword(): string;
  getId(): string;
  getCreatedAt(): Date;
  getUpdatedAt(): Date;
  getRoles(): string[];
}
