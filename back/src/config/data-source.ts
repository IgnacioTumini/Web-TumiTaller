import { DataSource } from "typeorm";
import { User } from "../entities/userEntitie";
import { Appointments } from "../entities/appointmetEntitie";
import { Credentials } from "../entities/credentialEntitie";
import { HOST, NAME, PASS, USERNAME } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: HOST,
  port: 5432,
  username: USERNAME,
  password: PASS,
  database: NAME,
  //dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [User, Credentials, Appointments],
  subscribers: [],
  migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);
export const AppointmentsModel = AppDataSource.getRepository(Appointments);
export const CredentialsModel = AppDataSource.getRepository(Credentials);
