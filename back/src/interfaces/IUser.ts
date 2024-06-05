import { IAppointment } from "./IAppointment";
import ICredential from "./ICredential";

interface IUser {
  id: number;
  name: string;
  email: string;
  birthdate: string;
  nDni: number;
  credentials: ICredential;
  appointments: IAppointment[];
}
export default IUser;
