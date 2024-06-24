'use server'
import { verifyPassword, createToken } from "@/utils/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const adminAuth = async (username: string, password: string) => {
  try {
    console.log({username, password})
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }

    // const isValid = await verifyPassword(password, user.password);
    const isValid = password === user.password;

    if (user && isValid) {
      const token = createToken(user);
      console.log({token});
      console.log('Token Created');
      return JSON.stringify({ token });
    }

    if (!isValid) {
      throw new Error("Invalid password");
    }

    // return createToken(user);
  } catch (error) {
    console.error(error);
    throw new Error("Login failed");
  }
};

