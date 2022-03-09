import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import TasksModel from '../models/TasksModel';
import TaskRepository from '../repositories/TaskRepository';
import { verifyToken } from '../schemas/authentication';
import { CreateTask } from '../interfaces/TaskInterface';

const createTask = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    const tokenId = verifyToken(token);
    if (!tokenId) {
      return res.status(401).json({
        error: 'Unauthorized',
      });
    }
    const newTask: CreateTask = {
      description: req.body.description,
      status: false,
      user_id: tokenId.id,
    }
    const repo = getRepository(TasksModel);
    const result = await repo.save(newTask);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

const getTasks = async (req: Request, res: Response) => {
  try {
    const token = verifyToken(req.headers.authorization);
    if (!token) {
      return res.status(401).json({
        error: 'Unauthorized',
      });
    }
    const repo = getCustomRepository(TaskRepository);
    const result = await repo.getTasks();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

const getTaskByUserId = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    const tokenId = verifyToken(token);
    if (!tokenId) {
      return res.status(401).json({
        error: 'Unauthorized',
      });
    }
    const repo = getCustomRepository(TaskRepository);
    const result = await repo.getTaskByUserId(tokenId.id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

const updateTask = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    const tokenId = verifyToken(token);
    if (!tokenId) {
      return res.status(401).json({
        error: 'Unauthorized',
      });
    }
    const repo = getRepository(TasksModel);
    const task = await repo.findOne(req.params.id);
    if (!task) {
      return res.status(404).json({
        error: 'Task not found',
      });
    }
    if (task.user_id !== tokenId.id) {
      return res.status(401).json({
        error: 'Unauthorized',
      });
    }
    const result = await repo.update({ id: Number(req.params.id)}, req.body);
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
  getTaskByUserId,
  updateTask,
};