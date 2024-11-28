import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts/fonts";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Seals",
  description: "Seals Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
