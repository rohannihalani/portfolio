import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rohan Nihalani",
  description: "Builder & Engineer — CS student at UCSB, co-founder of Rhome.",
  openGraph: {
    title: "Rohan Nihalani",
    description: "Builder & Engineer — CS student at UCSB, co-founder of Rhome.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
