import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import TasksModel from '../models/TasksModel';
import TaskRepository from '../repositories/TaskRepository';

const createTask = async (req: Request, res: Response) => {
  try {
    const repo = getRepository(TasksModel);
    const result = await repo.save(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

const getTasks = async (req: Request, res: Response) => {
  try {
    const repo = getCustomRepository(TaskRepository);
    const result = await repo.getTasks();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

export default {
  createTask,
  getTasks,
};