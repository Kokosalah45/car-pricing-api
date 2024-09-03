import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from './contracts/IUser.entity';

@Entity({
  name: 'users',
})
export class UserTypeORMMapper implements IUser {
  constructor(partial: Partial<UserTypeORMMapper>) {
    Object.assign(this, partial);
  }
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  private firstName: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  private lastName: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  private userName: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  private email: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  private password: string;

  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  private updatedAt?: Date;

  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
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
