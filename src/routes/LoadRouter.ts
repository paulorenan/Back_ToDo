import { Router } from 'express';
import UserController from '../controllers/UserController';

const LoadRouter = Router();

LoadRouter.get('/', UserController.getUserWithToken);

export default LoadRouter;