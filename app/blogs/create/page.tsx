"use client";

import { CreateBlogState, createBlog } from "@/app/lib/actions";
import { useActionState } from "react";

export default function CreateBlog() {
  const initialState: CreateBlogState = { message: null, errors: {} };
  const [state, formAction] = useActionState(createBlog, initialState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formAction(formData);
    if (!state.errors) {
      event.currentTarget.reset();
    }
  };

  return (
    <div className="bg-gray-950 flex flex-col justify-center p-6 md:p-10 rounded-xl w-full max-w-2xl text-lg mx-auto h-full max-h-screen overflow-y-auto">
      <h1 className="text-xl md:text-2xl text-center">New Blog</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-10">
        <div className="flex flex-col gap-3">
          <label htmlFor="title" className="">
            Title
          </label>
          <input
            id="title"
            name="title"
            aria-describedby="title-error"
            className="bg-inherit p-4 w-full border-2 border-gray-800 rounded-md h-8"
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
            className="bg-inherit p-4 w-full border-2 border-gray-800 rounded-md h-8"
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
            className="bg-inherit p-4 border-2 border-gray-800 rounded-md max-h-60 w-full resize-none"
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

        <button className="bg-gray-700 w-full rounded-md py-2" type="submit">
          Create Blog
        </button>
      </form>
    </div>
  );
}
