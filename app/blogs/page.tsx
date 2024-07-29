import { blogs } from "../lib/placeholder-data";
import { LikeButton } from "../ui/buttons";

export default function Blogs() {
  const blogsData = blogs;
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
            <LikeButton />
          </div>
        </div>
      ))}
    </div>
  );
}
