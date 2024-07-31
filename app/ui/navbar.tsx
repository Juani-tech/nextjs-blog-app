import Link from "next/link";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function NavBar() {
  const session = await auth();
  const user = session?.user;

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
      </div>
      <div className="flex">
        <div className="py-1 px-5">
          <Link className="text-slate-300" href="/user/create">
            Sign up
          </Link>
        </div>

        <div className="py-1 pr-5">
          {user && !user.name && (
            <Link className="text-slate-300" href="/login">
              Login
            </Link>
          )}
          {user && user.name && (
            <form
              action={async () => {
                "use server";
                console.log("Sign out");
                await signOut();
                redirect("/");
              }}
            >
              <button className="text-slate-300" type="submit">
                Log Out
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
