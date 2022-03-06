import { Router } from "express";
import UserRouter from "./UserRoutes";

const routes = Router();

routes.use('/user', UserRouter);

export default routes;