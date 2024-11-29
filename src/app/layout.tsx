import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts/fonts";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
