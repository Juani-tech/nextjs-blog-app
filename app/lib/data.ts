import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function fetchBlogs() {
  const blogs = await prisma.blog.findMany();
  return blogs;
}

// User

export async function createUser(username: string, password: string) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
  } catch (error) {
    throw Error("Error while creating user");
  }
}
