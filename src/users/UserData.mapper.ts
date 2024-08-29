import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class UserDataMapper {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'varchar2',
    length: 255,
  })
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  updatedAt: Date;

  @Column()
  createdAt: Date;

  constructor(partial: Partial<UserDataMapper>) {
    Object.assign(this, partial);
  }
}
