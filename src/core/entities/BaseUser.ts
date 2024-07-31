import { IUser } from './IUser';

export class BaseUser implements IUser {
  constructor(
    private id: number,
    private name: string,
    private email: string,
    private password: string,
    private role: string,
  ) {}

  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  getEmail(): string {
    return this.email;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  getPassword(): string {
    return this.password;
  }
  setPassword(password: string): void {
    this.password = password;
  }
  getRole(): string {
    return this.role;
  }
  setRole(role: string): void {
    this.role = role;
  }
}
