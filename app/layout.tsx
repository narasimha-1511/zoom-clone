import { Metadata } from "next";
import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-2 `}> {children}</body>
    </html>
  );
}
