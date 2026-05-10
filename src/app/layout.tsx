import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-['Matter']">{children}</body>
    </html>
  );
}
