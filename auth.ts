import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import type { User } from "@/app/lib/definitions";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUser(username: string): Promise<User> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (user) {
      return {
        ...user,
        id: user.id.toString(),
      };
    } else {
      console.error("User not found");
      throw Error("Invalid credentials");
    }
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials, req) {
        const parsedCredentials = z
          .object({ username: z.string().min(3), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          try {
            const user = await getUser(username);
            console.log("🚀 ~ authorize ~ user:", user);
            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );
            if (passwordsMatch)
              return {
                name: user.username,
                userId: user.id,
              };
            return null;
          } catch (error) {
            return null;
          }
        }
        // //   if (!user) return null;

        // console.log("Parsing error");
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (token.name && !session.userId) {
        const user = await getUser(token.name);
        session.userId = user.id;
      }

      return session;
    },
  },
});
