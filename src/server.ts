import dotenv from 'dotenv';
import app from './app';
import 'reflect-metadata';
import './database';

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});