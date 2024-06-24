import jwt from "jsonwebtoken";
import argon2 from "argon2";

const JWT_SECRET = process.env.JWT_SECRET || "";

export const hashPassword = async (password: string) => {
  const salt = await argon2.hash(password);
  return salt
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => {
  return await argon2.verify(password, hashedPassword);
};

export const createToken = (user: { id: number }): string => {
  return jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
