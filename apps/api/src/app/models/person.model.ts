import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { User } from './user.model';

@Entity()
export class Person extends BaseModel
{
  @Column()
  name: string;

  @Column()
  surname: string;

  @OneToOne(() => User, user => user.person)
  @JoinColumn()
  user: User;
}
