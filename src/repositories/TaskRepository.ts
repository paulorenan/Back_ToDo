import { EntityRepository, Repository } from "typeorm";
import Task from "../models/TasksModel";

@EntityRepository(Task)
export default class TaskRepository extends Repository<Task> {
  public async getTaskByUserId(user_id: string): Promise<Task[] | undefined> {
    return this.find({
      where: {
        user_id,
      },
    });
  }
  public async getTasks(): Promise<Task[] | undefined> {
    return this.find();
  }
}