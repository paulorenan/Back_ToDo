import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
};

const createToken = (user: any) => {
  return jwt.sign({id: user.id, email: user.email}, secret, jwtConfig);
}

const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secret);
  }
  catch(err) {
    return null;
  }
}

export {
  createToken,
  verifyToken,
}