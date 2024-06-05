import { User } from "../entities/userEntitie";

export enum StatusTypes {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}

export interface IAppointment {
  id: number;
  date: string;
  time: string;
  description: string;
  status: StatusTypes;
  user: User;
}
