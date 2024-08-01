"use server";

import { DeleteButton, LikeButton } from "../ui/buttons";
import { fetchBlogs } from "../lib/data";
import { auth } from "@/auth";
import { Suspense } from "react";
import { BlogSkeleton } from "../ui/skeletons";
import BlogsTable from "../ui/blogs";

export default async function Blogs() {
  return (
    <Suspense fallback={<BlogSkeleton />}>
      <BlogsTable />
    </Suspense>
  );
}
