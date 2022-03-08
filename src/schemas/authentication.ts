import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { TokenInt } from '../interfaces/TokenInterface';

dotenv.config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
};

const createToken = (user: any) => {
  const token = jwt.sign({id: user.id, email: user.email}, secret, jwtConfig);
  return token;
}

const verifyToken = (token: string): TokenInt | null => {
  try {
    return jwt.verify(token, secret) as TokenInt;
  }
  catch(err) {
    return null;
  }
}

export {
  createToken,
  verifyToken,
}