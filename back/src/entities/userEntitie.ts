import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credentials } from "./credentialEntitie";
import { Appointments } from "./appointmetEntitie";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  email: string;

  @Column()
  birthdate: string;

  @Column("integer")
  nDni: number;

  @OneToOne(() => Credentials)
  @JoinColumn()
  credentials: Credentials;

  @OneToMany(() => Appointments, (appointment) => appointment.user)
  appointments: Appointments[];
}
