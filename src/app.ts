import express, { Express, Request, Response } from 'express';
import cors from 'cors';

import studentRoutes from './routes/studentRoutes';
import errorHandler from './middlewares/errorHandler';

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use('/etudiants', studentRoutes);

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'API Etudiants opérationnelle ' });
});

app.use(errorHandler);

export default app;
