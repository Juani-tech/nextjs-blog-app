"use server";

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
