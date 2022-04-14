import express from 'express';
import routes from './routes';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (request, response) => {
  return response.json({ message: 'Welcome to ToDo List BackEnd' });
});

app.use(routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;