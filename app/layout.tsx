import type { Metadata } from "next";
import "./globals.css";
import Navbar from "components/layout/navbar";
import { GeistSans } from "geist/font/sans";
import { ReactNode, Suspense } from "react";

export const metadata: Metadata = {
  title: "Martin Pandarski's store",
  description: "NextJS 14, Prisma, Postgres",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
