export interface IUser {
  getUserName(): string;
  getEmail(): string;
  getFirstName(): string;
  getLastName(): string;
  getPassword(): string;
  getID(): string;
  getCreatedAt(): Date | null;
  getUpdatedAt(): Date | null;
  getRoles(): string[];
}
