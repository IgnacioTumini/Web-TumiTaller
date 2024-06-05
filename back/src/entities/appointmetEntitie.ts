import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StatusTypes } from "../interfaces/IAppointment";
import { User } from "./userEntitie";

@Entity()
export class Appointments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  date: string;

  @Column()
  time: string;

  @Column()
  description: string;

  @Column({
    type: "enum",
    enum: StatusTypes,
    default: StatusTypes.ACTIVE,
  })
  status: StatusTypes;
  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}
