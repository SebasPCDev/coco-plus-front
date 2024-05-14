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
  role: string;
  status: string;
}

export default IUser;
