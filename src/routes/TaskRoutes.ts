import { Router } from 'express';
import TaskController from '../controllers/TaskController';

const TaskRouter = Router();

TaskRouter.post('/', TaskController.createTask);
TaskRouter.get('/', TaskController.getTasks);
TaskRouter.get('/user', TaskController.getTaskByUserId);

export default TaskRouter;