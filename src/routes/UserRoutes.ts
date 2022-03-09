import { Router } from 'express';
import UserController from '../controllers/UserController';

const UserRouter = Router();

UserRouter.post('/', UserController.createUser);

UserRouter.get('/', UserController.getUsers);

UserRouter.put('/', UserController.updateUser);

UserRouter.delete('/', UserController.deleteUser);

UserRouter.get('/task', UserController.getUsersWithTasks);

UserRouter.get('/:id', UserController.getUserById);



export default UserRouter;