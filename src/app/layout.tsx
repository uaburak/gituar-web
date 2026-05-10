import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gituar - Gitar Repertuvarınızı Yönetmenin En Sade Yolu",
  description: "Gituar ile favori şarkılarınızı kaydedin, akorları keşfedin ve kendi repertuvarınızı oluşturun. Gitar öğrenmenin ve çalmanın en minimal yolu.",
  keywords: "gitar, akor, repertuvar, tab, şarkı sözleri, ios uygulaması, gituar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
