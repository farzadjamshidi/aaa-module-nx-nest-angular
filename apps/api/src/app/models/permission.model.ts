import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { Role } from './role.model';

@Entity()
export class Permission extends BaseModel
{
  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Role, role => role.permissions)
  roles: Role[];
}
