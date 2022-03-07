import { Router } from "express";
import UserRouter from "./UserRoutes";
import TaskRouter from "./TaskRoutes";

const routes = Router();

routes.use('/user', UserRouter);
routes.use('/task', TaskRouter);

export default routes;