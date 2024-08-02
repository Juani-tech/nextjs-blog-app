"use client";

import { useActionState } from "react";
import { createNewUser, CreateUserState } from "@/app/lib/actions";

export default function SignUp() {
  const initialState: CreateUserState = { message: null, errors: {} };
  const [state, formAction] = useActionState(createNewUser, initialState);

  return (
    <div className="grid md:grid-cols-2 grid-rows-2 md:gap-8 mt-10 px-4 md:px-10">
      <div className="bg-slate-900 p-6 rounded-xl">
        <h1 className="md:text-2xl flex justify-center">Register</h1>
        <form
          action={formAction}
          className="flex flex-col gap-4 mt-5 md:gap-8 md:mt-10"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              aria-describedby="username-error"
              className="w-full bg-inherit p-4 border-2 border-gray-800 rounded-md h-8"
              required
              minLength={3}
            />
            <div id="username-error" aria-live="polite" aria-atomic="true">
              {state.errors?.username &&
                state.errors.username.map((error: string) => (
                  <p className="mt-2 text-lg text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              aria-describedby="password-error"
              className="w-full bg-inherit p-4 border-2 border-gray-800 rounded-md h-8"
              required
              minLength={6}
            />
            <div id="password-error" aria-live="polite" aria-atomic="true">
              {state.errors?.password &&
                state.errors.password.map((error: string) => (
                  <p className="mt-2 text-lg text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="mt-6 bg-gray-700 w-full md:w-56 rounded-md py-2"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col justify-evenly mt-10 md:mt-0 px-4 md:px-10">
        <em className="md:text-6xl">Write, Share, Explore</em>
        <em>
          <q className="md:text-2xl">So many books, so little time.</q>
          <p>- Frank Zappa</p>
        </em>
      </div>
    </div>
  );
}
