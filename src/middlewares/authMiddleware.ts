import { Request, Response, NextFunction } from 'express';
import jwtUtils from '../utils/jwt';
import { AppError } from '../services/studentService';
const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new AppError('Token manquant', 401));
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return next(new AppError('Token manquant', 401));
    }
    try {
        const payload = jwtUtils.verifyToken(token);
        (req as any).user = payload;
        next();
    } catch (err: unknown) {
        next(new AppError('Token invalide ou expiré', 401));
    }
}
export default authMiddleware;