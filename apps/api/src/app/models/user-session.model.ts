import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { ClientDevice } from './client-device.model';
import { User } from './user.model';

@Entity()
export class UserSession extends BaseModel
{

  @Column()
  endpoint: string;

  @ManyToOne(() => User, user => user.sessions)
  user: User;

  @OneToOne(() => ClientDevice, clientDevice => clientDevice.session)
  clientDevice: ClientDevice;
}
