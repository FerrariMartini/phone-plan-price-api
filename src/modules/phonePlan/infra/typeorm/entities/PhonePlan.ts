import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("phone_plan")
export default class PhonePlan {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  phonePlanCode: number;

  @Column()
  type: string;

  @Column()
  callFreeMinutes: number;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
