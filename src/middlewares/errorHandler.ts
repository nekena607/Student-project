import { Request, Response, NextFunction } from 'express';
import { AppError } from '../services/studentService';

const errorHandler = (err: Error | AppError, req: Request, res: Response, next: NextFunction): void => {
    const statusCode = 'statusCode' in err && err.statusCode ? err.statusCode : 500;
    res.status(statusCode).json({ error: err.message || 'Erreur interne du serveur' });
};

export default errorHandler;
