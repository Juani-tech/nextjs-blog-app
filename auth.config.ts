import type { NextAuthConfig, User } from "next-auth";
import { getUser } from "./auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnBlogs = nextUrl.pathname.startsWith("/blogs");
      if (isOnBlogs) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      //  else if (isLoggedIn) {
      //   return Response.redirect(new URL("/blogs", nextUrl));
      // }
      return true;
    },
  },

  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

// satisfies NextAuthConfig:
// This ensures that the authConfig object satisfies the NextAuthConfig type, helping with
// type checking and ensuring that the configuration adheres to the expected structure.
