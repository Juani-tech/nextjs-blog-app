const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function BlogSkeleton() {
  return (
      <div className="flex justify-center align-center">
        <h1 className="text-2xl">Loading blogs...</h1>
      </div>
  );
}
