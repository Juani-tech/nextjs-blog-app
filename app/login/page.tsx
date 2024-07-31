"use client";

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";

export default function Login() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <div className="flex justify-center gap-8 mt-10">
      <div className="bg-slate-900 p-6 ml-10  rounded-xl">
        <h1 className="text-2xl flex justify-center">Login</h1>
        <form action={formAction} className="flex flex-col gap-8 mt-10 ">
          <div className="flex flex-col gap-3">
            <label htmlFor="username" className="">
              Username
            </label>
            <input
              id="username"
              name="username"
              aria-describedby="username-error"
              className="bg-inherit p-4  border-2 border-gray-800 rounded-md h-8"
              required
              minLength={3}
            />
            {/* <div id="username-error" aria-live="polite" aria-atomic="true">
              {state.errors?.username &&
                state.errors.username.map((error: string) => (
                  <p className="mt-2 text-lg text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div> */}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              aria-describedby="password-error"
              className="bg-inherit p-4  border-2 border-gray-800 rounded-md h-8"
              required
              minLength={6}
            />
            {/* <div id="password-error" aria-live="polite" aria-atomic="true">
              {state.errors?.password &&
                state.errors.password.map((error: string) => (
                  <p className="mt-2 text-lg text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div> */}
            {errorMessage && (
              <div className="flex gap-2">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <button
              className="mt-6 bg-gray-700 w-56 rounded-md py-2"
              type="submit"
              aria-disabled={isPending}
            >
              Log in
            </button>
            <div className="flex h-8 items-end space-x-1"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
