import Link from "next/link";

export default function NavBar() {
  return (
    <div className=" border-b-2 border-slate-700 flex justify-center gap-14 font-bold text-xl py-4">
      <div className="py-1 px-4 ">
        <Link className="text-teal-500" href="/blogs">
          Blogs
        </Link>
      </div>

      <div className="py-1 px-4">
        <Link className="text-teal-500" href="/">
          Create Blog
        </Link>
      </div>

      <div className="py-1 px-4">
        <Link className="text-teal-500" href="/">
          Users
        </Link>
      </div>

      <div className="py-1 px-4">
        <Link className="text-teal-500" href="/">
          Login
        </Link>
      </div>
    </div>
  );
}
