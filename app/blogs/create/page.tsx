"use client";

import { CreateBlogState, createBlog } from "@/app/lib/actions";
import { useActionState } from "react";
import { useSession } from "next-auth/react";

export default function CreateBlog() {
  const initialState: CreateBlogState = { message: null, errors: {} };
  const { data: session, status } = useSession();
  const [state, formAction] = useActionState(createBlog, initialState);

  return (
    <div className="bg-gray-950 p-10 rounded-xl mx-20 text-xl">
      <h1 className="text-2xl">New Blog</h1>
      <form action={formAction} className="flex flex-col gap-8 mt-10">
        <div className="flex flex-col gap-3">
          <label htmlFor="title" className="">
            Title
          </label>
          <input
            id="title"
            name="title"
            aria-describedby="title-error"
            className="bg-inherit p-4  border-2 border-gray-800 rounded-md h-8"
          />  
          <div id="title-error" aria-live="polite" aria-atomic="true">
            {state.errors?.title &&
              state.errors.title.map((error: string) => (
                <p className="mt-2 text-lg text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="url" className="">
            Url
          </label>
          <input
            id="url"
            name="url"
            aria-describedby="url-error"
            className="bg-inherit p-4  border-2 border-gray-800 rounded-md h-8"
          />
          <div id="url-error" aria-live="polite" aria-atomic="true">
            {state.errors?.url &&
              state.errors.url.map((error: string) => (
                <p className="mt-2 text-lg text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="description" className="">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            aria-describedby="description-error"
            className="bg-inherit p-4  border-2 border-gray-800 rounded-md max-h-60 resize-none"
          />
          <div id="description-error" aria-live="polite" aria-atomic="true">
            {state.errors?.description &&
              state.errors.description.map((error: string) => (
                <p className="mt-2 text-lg text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <button className="bg-gray-700 w-56 rounded-md py-2" type="submit">
          Create Blog
        </button>
      </form>
    </div>
  );
}
