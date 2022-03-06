import dotenv from 'dotenv';
import app from './app';
import 'reflect-metadata';

dotenv.config();

app.listen(process.env.DB_PORT, () => {
  console.log(`Server started on port ${process.env.DB_PORT}`);
});