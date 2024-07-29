import Link from "next/link";

export default function NavBar() {
  return (
    <div className=" border-b-2 border-gray-700 flex justify-between gap-14 font-bold text-xl py-4">
      <div className="flex">
        <div className="py-1 px-5 ">
          <Link className="text-slate-300" href="/">
            Home
          </Link>
        </div>

        <div className="py-1 px-5 ">
          <Link className="text-slate-300" href="/blogs">
            Blogs
          </Link>
        </div>

        <div className="py-1 px-5">
          <Link className="text-slate-300" href="/blogs/create">
            Create Blog
          </Link>
        </div>

        {/* <div className="py-1 px-5">
          <Link className="text-slate-300" href="/">
            Users
          </Link>
        </div> */}
      </div>

      <div className="py-1 pr-5">
        <Link className="text-slate-300" href="/">
          Login
        </Link>
      </div>
    </div>
  );
}
