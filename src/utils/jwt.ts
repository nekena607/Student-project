import jwt, { SignOptions } from 'jsonwebtoken';
import { AuthPayload } from '../types/auth';
const SECRET = process.env.JWT_SECRET as string;
const EXPIRES_IN = (process.env.JWT_EXPIRES_IN || '1h') as SignOptions['expiresIn'];
const generateToken = (payload: AuthPayload): string => {
    return jwt.sign(payload, SECRET, { expiresIn: EXPIRES_IN });
};
const verifyToken = (token: string): AuthPayload => {
    return jwt.verify(token, SECRET) as AuthPayload;
};
export default {
    generateToken,
    verifyToken,
};