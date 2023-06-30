import { Column, Entity, OneToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { UserSession } from './user-session.model';

@Entity()
export class ClientDevice extends BaseModel
{
  @Column()
  ip: string;

  @Column()
  location: string;

  @OneToOne(() => UserSession, userSession => userSession.clientDevice)
  session: UserSession;
}
