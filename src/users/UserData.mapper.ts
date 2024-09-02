import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from './contracts/IUser.entity';

@Entity({
  name: 'users',
})
export class UserDataMapper implements IUser {
  constructor(partial: Partial<UserDataMapper>) {
    Object.assign(this, partial);
  }
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'varchar2',
    length: 255,
  })
  private firstName: string;

  @Column()
  private lastName: string;

  @Column()
  private userName: string;

  @Column()
  private email: string;

  @Column()
  private password: string;

  @Column()
  private updatedAt?: Date;

  @Column()
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
