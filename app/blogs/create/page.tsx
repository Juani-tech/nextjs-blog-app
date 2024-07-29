export default function CreateBlog() {
  return (
    <div className="bg-gray-950 p-10 text-gray-300 rounded-md mx-20 text-xl">
      <h1 className="text-2xl">New Blog</h1>
      <form className="flex flex-col gap-8 mt-10">
        <div className="flex flex-col gap-3">
          <label className="">Title</label>
          <input className="bg-inherit p-4  border-2 border-gray-800 rounded-md h-8" />
        </div>
        <div className="flex flex-col gap-3">
          <label className="">Url</label>
          <input className="bg-inherit p-4  border-2 border-gray-800 rounded-md h-8" />
        </div>
        <div className="flex flex-col gap-3">
          <label className="">Description</label>
          <textarea className="bg-inherit p-4  border-2 border-gray-800 rounded-md max-h-60 resize-none" />
        </div>
      </form>
    </div>
  );
}
