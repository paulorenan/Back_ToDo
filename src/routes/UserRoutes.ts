import { response, Router } from 'express';
import { getRepository } from 'typeorm';
import UserModel from '../models/UserModel';

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
    const result = await repo.find();
    return res.status(200).json(result);
  }
  catch(err){
    return res.status(400).json({
      error: err.message,
    });
  }
});

export default UserRouter;