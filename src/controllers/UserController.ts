import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import UserModel from '../models/UserModel';
import UserRepository from '../repositories/UserRepository';

const createUser = async (req: Request, res: Response) => {
  try {
    const repo = getRepository(UserModel);
    const result = await repo.save(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

const getUsers = async (req: Request, res: Response) => {
  try
  {
    const repo = getRepository(UserModel);
    const result = await repo.find({
      select: ["id", "name", "email", "createdAt", "updatedAt"],
    });
    return res.status(200).json(result);
  }
  catch(err)
  {
    return res.status(400).json({
      error: err.message,
    });
  }
}

const getUserById = async (req: Request, res: Response) => {
  try
  {
    const repo = getCustomRepository(UserRepository);
    const result = await repo.getUserById(req.params.id);

    return res.status(200).json(result);
  }
  catch(err)
  {
    return res.status(400).json({
      error: err.message,
    });
  }
}

export default {
  createUser,
  getUsers,
  getUserById,
};