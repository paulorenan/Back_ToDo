import { Router } from "express";
import UserRouter from "./UserRoutes";
import TaskRouter from "./TaskRoutes";
import LoginRouter from "./LoginRouter";
import LoadRouter from "./LoadRouter";

const routes = Router();

routes.use('/user', UserRouter);
routes.use('/task', TaskRouter);
routes.use('/login', LoginRouter);
routes.use('/load', LoadRouter);

export default routes;