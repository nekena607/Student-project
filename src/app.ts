import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes';
import authRoutes from './routes/authRoutes.ts';
import authMiddleware from './middlewares/authMiddleware';
import errorHandler from './middlewares/errorHandler';
const app: Express = express();
app.use(cors());;
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/etudiants', authMiddleware, studentRoutes);
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'API Etudiants opérationnelle ' });
});
app.use((req: Request, res: Response) => {
    res.status(404).json({ error: 'Route non trouvée' });
});
app.use(errorHandler);
export default app;