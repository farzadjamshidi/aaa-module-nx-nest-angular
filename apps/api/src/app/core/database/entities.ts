import { ClientDevice } from "../../models/client-device.model";
import { Permission } from "../../models/permission.model";
import { Person } from "../../models/person.model";
import { Role } from "../../models/role.model";
import { UserSession } from "../../models/user-session.model";
import { User } from "../../models/user.model";

export const entities = [
  User,
  UserSession,
  Role,
  Person,
  Permission,
  ClientDevice
];

export default entities;
