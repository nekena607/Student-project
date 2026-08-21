import { Request, Response, NextFunction } from 'express';
import { AppError } from '../services/studentService';

const errorHandler = (err: Error | AppError, req: Request, res: Response, next: NextFunction): void => {
    console.error(err);
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    const message = err instanceof AppError ? err.message : 'Erreur interne du serveur';
    res.status(statusCode).json({ error: message })
};

export default errorHandler;