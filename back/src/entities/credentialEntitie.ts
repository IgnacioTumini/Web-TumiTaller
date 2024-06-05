import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Credentials {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  username: string;

  @Column()
  password: string;
  
}
