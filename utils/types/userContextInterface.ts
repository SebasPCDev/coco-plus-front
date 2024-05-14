import IUser from './userResponseInterface';

interface IUserContext {
  user: IUser | undefined;
  setUser: (value: IUser | undefined) => void;
  token: string | undefined;
  setToken: (value: string | undefined) => void;
}

export default IUserContext;
