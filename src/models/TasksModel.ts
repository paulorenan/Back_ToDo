import { Entity, Column, Timestamp, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import User from "./UserModel";

@Entity('tasks')
export default class Task {
  @PrimaryGeneratedColumn('increment')
  id: string;

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

  @JoinColumn({ 
    name: 'user_id',
    referencedColumnName: 'id',
  })
  @ManyToOne(type => User, tasks => Task)
  user_id: number;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Timestamp;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Timestamp;
}