import express from 'express';
import dotenv from 'dotenv';
// import routes from "./routes";

const app = express();
app.use(express.json());

export default app;