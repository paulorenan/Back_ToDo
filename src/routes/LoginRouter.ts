import { Router } from 'express';
import UserController from '../controllers/UserController';

const LoginRouter = Router();

LoginRouter.post('/', UserController.getUserByEmailAndPassword);

export default LoginRouter;