import { Router } from "express";
import UserRouter from "./UserRoutes";
import TaskRouter from "./TaskRoutes";
import LoginRouter from "./LoginRouter";

const routes = Router();

routes.use('/user', UserRouter);
routes.use('/task', TaskRouter);
routes.use('/login', LoginRouter);

export default routes;