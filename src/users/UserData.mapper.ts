import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class UserDataMapper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar2',
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
}
