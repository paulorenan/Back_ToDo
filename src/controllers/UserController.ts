import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import UserModel from '../models/UserModel';
import UserRepository from '../repositories/UserRepository';
import { createToken, verifyToken } from '../schemas/authentication';

const createUser = async (req: Request, res: Response) => {
  try {
    const repo = getRepository(UserModel);
    const result = await repo.save(req.body);
    const user = {
      id: result.id,
      name: result.name,
      email: result.email,
      image: result.image,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    };
    const token = createToken(user);
    return res.status(201).json({message: 'Usuário Criado com sucesso', token, user});
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

const getUsers = async (req: Request, res: Response) => {
  try {
    const token = verifyToken(req.headers.authorization);
    if (!token) {
      return res.status(401).json({
        error: 'Unauthorized',
      });
    }
    const repo = getRepository(UserModel);
    const result = await repo.find({
      select: ["id", "name", "email", "image", "createdAt", "updatedAt"],
    });
    return res.status(200).json(result);
  } catch(err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

const getUserById = async (req: Request, res: Response) => {
  try {
    const token = verifyToken(req.headers.authorization);
    if (!token) {
      return res.status(401).json({
        error: 'Unauthorized',
      });
    }
    const repo = getCustomRepository(UserRepository);
    const result = await repo.getUserById(Number(req.params.id));

    return res.status(200).json(result);
  } catch(err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

const getUsersWithTasks = async (req: Request, res: Response) => {
  try {
    const token = verifyToken(req.headers.authorization);
    if (!token) {
      return res.status(401).json({
        error: 'Unauthorized',
      });
    }
    const repo = getCustomRepository(UserRepository);
    const result = await repo.getUsersWithTasks();

    return res.status(200).json(result);
  } catch(err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

const getUserByEmailAndPassword = async (req: Request, res: Response) => {
  try {
    const repo = getCustomRepository(UserRepository);
    const result = await repo.getUserByEmailAndPassword(req.body.email, req.body.password);
    if (result) {
      const token = createToken(result);
      return res.status(200).json({message: 'Login Efetuado com sucesso', token, user: result});
    }
    return res.status(400).json({
      error: 'Invalid email or password',
    });
  } catch(err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

const getUserWithToken = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    const tokenId = verifyToken(token);
    if (!tokenId) {
      return res.status(401).json({
        error: 'Unauthorized',
      });
    }
    const repo = getCustomRepository(UserRepository);
    const result = await repo.getUserById(tokenId.id);
    return res.status(200).json({message: 'Tudo Certo', token, user: result});
  } catch(err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    const tokenId = verifyToken(token);
    if (!tokenId) {
      return res.status(401).json({
        error: 'Unauthorized',
      });
    }
    const repo = getRepository(UserModel);
    await repo.update(tokenId.id, req.body);
    const result = await repo.findOne(tokenId.id);
    return res.status(200).json(result);
  } catch(err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    const tokenId = verifyToken(token);
    if (!tokenId) {
      return res.status(401).json({
        error: 'Unauthorized',
      });
    }
    const repo = getRepository(UserModel);
    await repo.delete(tokenId.id);
    return res.status(200).json({message: 'Usuário Deletado com sucesso'});
  } catch(err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}


export default {
  createUser,
  getUsers,
  getUserById,
  getUsersWithTasks,
  getUserByEmailAndPassword,
  getUserWithToken,
  updateUser,
  deleteUser,
};