import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/app/ui/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "Blog App made by Juani",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black flex min-h-screen flex-col text-gray-300">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
