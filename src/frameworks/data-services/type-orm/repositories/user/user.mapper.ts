import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserDataMapper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  password: string;

  @Column()
  email: string;

  @Column()
  role: string;
}
