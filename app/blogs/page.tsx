"use server";

import { DeleteButton, LikeButton } from "../ui/buttons";
import { fetchBlogs } from "../lib/data";
import { auth } from "@/auth";

export default async function Blogs() {
  const session = await auth();
  const userId = session?.userId;
  const blogsData = await fetchBlogs();
  console.log("userId: ", userId);
  return (
    <div className="flex flex-col">
      {blogsData.map((blog) => (
        <div
          className="bg-gray-950 p-4 border-b-2 border-gray-700 flex flex-col gap-2 text-white"
          key={blog.id}
        >
          <h1 className="text-xl ">{blog.title}</h1>
          <em>{blog.url}</em>
          <div className="flex gap-4">
            <p>{blog.likes} likes</p>
            <LikeButton blogId={blog.id} />
            {userId && Number(userId) === blog.userId && (
              <DeleteButton blogId={blog.id} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
