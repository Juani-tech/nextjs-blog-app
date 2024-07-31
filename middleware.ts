import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

/* 
This line initializes NextAuth with the configuration specified in authConfig and sets up the
 middleware that will be used to handle authentication.

NextAuth(authConfig).auth returns a middleware function that processes incoming requests, applying the authentication logic defined in authConfig, such as the authorized callback.
*/
export default NextAuth(authConfig).auth;

/*
This pattern matches all paths except those that:
 - Start with /api (API routes are often excluded from middleware to avoid interference with 
 API logic).
 - Are within the Next.js static files or images directories (/_next/static and /_next/image).
 - End with .png, presumably excluding image files from authentication checks.
*/
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
