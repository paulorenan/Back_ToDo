import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import UserModel from '../models/UserModel';
import UserRepository from '../repositories/UserRepository';

const UserRouter = Router();

UserRouter.post('/', async (req, res) => {
  try{
    const repo = getRepository(UserModel);
    const result = await repo.save(req.body);
    return res.status(201).json(result);
  }
  catch(err){
    return res.status(400).json({
      error: err.message,
    });
  }
});

UserRouter.get('/', async (req, res) => {
  try{
    const repo = getRepository(UserModel);
    const result = await repo.find({
      select: ["id", "name", "email", "createdAt", "updatedAt"],
    });
    return res.status(200).json(result);
  }
  catch(err){
    return res.status(400).json({
      error: err.message,
    });
  }
});

UserRouter.get('/:id', async (req, res) => {
  try{
    const repo = getCustomRepository(UserRepository);
    const result = await repo.getUserById(req.params.id);

    return res.status(200).json(result);
  }
  catch(err){
    return res.status(400).json({
      error: err.message,
    });
  }
});

export default UserRouter;