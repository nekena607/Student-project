import bcrypt from 'bcryptjs';
import jwtUtils from '../utils/jwt';
import { LoginInput } from '../types/auth';
import { AppError } from './studentService';
const login = async ({ email, password }: LoginInput): Promise<string> => {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
    if (!adminEmail || !adminPasswordHash) {
        throw new AppError('Configuration authentification manquante', 500);
    }
    if (email !== adminEmail) {
        throw new AppError('Identifiants invalides', 401);
    }
    const valid = await bcrypt.compare(password, adminPasswordHash);
    if (!valid) {
        throw new AppError('Identifiants invalides', 401);
    }
    return jwtUtils.generateToken({ email });
};
export default {
    login,
}