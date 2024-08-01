import Link from "next/link";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default async function NavBar() {
  const session = await auth();
  const user = session?.user;

  return (
    <>
      <div className="flex justify-start ml-5 mt-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Bars3Icon className="h-10 w-10" />
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link className="text-slate-400 hover:text-slate-300" href="/">
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="text-slate-400 hover:text-slate-300"
                href="/blogs"
              >
                Blogs
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="text-slate-400 hover:text-slate-300"
                href="/blogs/create"
              >
                Create Blog
              </Link>
            </DropdownMenuItem>
            {!user && (
              <>
                <DropdownMenuItem>
                  <Link
                    className="text-slate-400 hover:text-slate-300"
                    href="/login"
                  >
                    Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="text-slate-400 hover:text-slate-300"
                    href="/user/create"
                  >
                    Sign up
                  </Link>
                </DropdownMenuItem>
              </>
            )}
            {user && user.name && (
              <DropdownMenuItem>
                <form
                  action={async () => {
                    "use server";
                    console.log("Sign out");
                    await signOut();
                    redirect("/");
                  }}
                >
                  <button
                    className="text-slate-400 hover:text-slate-300"
                    type="submit"
                  >
                    Log Out
                  </button>
                </form>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className=" border-b-2 border-gray-700 justify-between gap-14 font-bold hidden md:flex text-sm md:text-xl py-4">
        <div className="flex">
          <div className="py-1 px-5 ">
            <Link className="text-slate-400 hover:text-slate-300" href="/">
              Home
            </Link>
          </div>

          <div className="py-1 px-5 ">
            <Link className="text-slate-400 hover:text-slate-300" href="/blogs">
              Blogs
            </Link>
          </div>

          <div className="py-1 px-5">
            <Link
              className="text-slate-400 hover:text-slate-300"
              href="/blogs/create"
            >
              Create Blog
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="py-1 pr-5">
            {!user && (
              <div className="flex gap-14">
                <Link
                  className="text-slate-400 hover:text-slate-300"
                  href="/user/create"
                >
                  Sign up
                </Link>
                <Link
                  className="text-slate-400 hover:text-slate-300"
                  href="/login"
                >
                  Login
                </Link>
              </div>
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
                <button
                  className="text-slate-400 hover:text-slate-300"
                  type="submit"
                >
                  Log Out
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
