import { Role } from './users/usersRoles';

interface IUser {
  id: string;
  name: string;
  lastname: string;
  phone: string;
  email: string;
  identification: string;
  position: string;
  recoveryToken: string | null;
  activationDate: string | null;
  role: Role;
  status: string;
}

export default IUser;
