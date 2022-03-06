import { response, Router } from 'express';
import { getRepository } from 'typeorm';
import UserModel from '../models/UserModel';

const UserRouter = Router();

UserRouter.post('/', (req, res) => {
  try{
    const repo = getRepository(UserModel);
    const result = repo.save(req.body);
    return res.status(201).json(result);
  }
  catch(err){
    return res.status(400).json({
      error: err.message,
    });
  }
});

export default UserRouter;