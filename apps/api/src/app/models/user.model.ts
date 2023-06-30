import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { Person } from './person.model';
import { Role } from './role.model';
import { UserSession } from './user-session.model';

@Entity()
export class User extends BaseModel
{
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Role, role => role.users)
  @JoinTable()
  roles: Role[];

  @OneToMany(() => UserSession, userSession => userSession.user)
  sessions: UserSession[];

  @OneToOne(() => Person, person => person.user)
  person: Person;
}
