export interface IUser {
  getId(): number;
  getName(): string;
  setName(name: string): void;
  getEmail(): string;
  setEmail(email: string): void;
  getPassword(): string;
  setPassword(password: string): void;
  getRole(): string;
  setRole(role: string): void;
}
