const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function BlogSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex flex-col"></div>
    </div>
  );
}
