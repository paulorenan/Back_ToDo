import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (request, response) => {
  return response.json({ message: 'Welcome to ToDo List BackEnd' });
});

app.use(routes);

export default app;