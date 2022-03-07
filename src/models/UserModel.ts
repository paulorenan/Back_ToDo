import { Entity, Column, Timestamp, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Task from "./TasksModel";

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @OneToMany(type => Task, task => task.user_id)
  tasks: Task[];

  @CreateDateColumn({name: 'created_at'})
  createdAt: Timestamp;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Timestamp;
}