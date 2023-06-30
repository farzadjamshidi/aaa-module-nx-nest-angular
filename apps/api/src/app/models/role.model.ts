import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { Permission } from './permission.model';
import { User } from './user.model';

@Entity()
export class Role extends BaseModel
{
  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => User, user => user.roles)
  users: User[];

  @ManyToMany(() => Permission, permission => permission.roles)
  permissions: Permission[];
}
