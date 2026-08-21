import { Request, Response, NextFunction } from 'express';
import authService from '../services/authService';
const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = await authService.login(req.body);
        res.status(200).json({ token });
    } catch (err: unknown) {
        next(err);
    }
}
export default {
    login,
};