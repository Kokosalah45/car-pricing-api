export interface IUser {
  getUserName(): string;
  getEmail(): string;
  getPassword(): string;
  getId(): string;
  getCreatedAt(): Date | null;
  getUpdatedAt(): Date | null;
  getRoles(): string[];
}
