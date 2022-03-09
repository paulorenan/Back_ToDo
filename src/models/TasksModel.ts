import { Entity, Column, Timestamp, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import User from "./UserModel";

@Entity('tasks')
export default class Task {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  description: string;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  status: boolean;

  @ManyToOne(type => User, user => user.tasks)
  @JoinColumn({ name: 'user_id' })
  @Column({
    type: 'varchar',
    nullable: false,
  })
  user_id: number;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Timestamp;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Timestamp;
}