import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maju Jaya Lancar",
  description: "Kursus mengemudi dengan fokus pada keamanan dan kenyamanan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
