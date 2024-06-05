import IUser from "./IUser";

export interface ILogin {
  login: boolean;
  user: IUser | null;
}
