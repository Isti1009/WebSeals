import { Inter } from "next/font/google";

// Menggunakan font Inter dengan pengaturan default
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Sesuaikan dengan berat font yang Anda butuhkan
  variable: "--font-inter", // Variabel untuk akses di seluruh proyek
  display: "swap",
  preload: true,
  adjustFontFallback: false,
  fallback: ["Helvetica", "Arial", "sans-serif"],
  style: "normal",
});
