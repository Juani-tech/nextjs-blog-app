// export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-4xl p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}
