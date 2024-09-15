import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "./contracts/IUser.entity";

@Entity({
  name: "users",
})
export class UserTypeORMMapper implements IUser {
  constructor(partial: Partial<UserTypeORMMapper>) {
    Object.assign(this, partial);
  }
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: "varchar",
    length: 255,
    name: "first_name",
  })
  private firstName: string;

  @Column({
    type: "varchar",
    length: 255,
    name: "last_name",
  })
  private lastName: string;

  @Column({
    type: "varchar",
    length: 255,
    name: "username",
  })
  private userName: string;

  @Column({
    type: "varchar",
    length: 255,
    name: "email",
  })
  private email: string;

  @Column({
    type: "varchar",
    length: 255,
    name: "password",
  })
  private password: string;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    name: "updated_at",
  })
  private updatedAt?: Date;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    name: "created_at",
  })
  private createdAt?: Date;

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
  getID() {
    return this.id;
  }
}
