import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "De Nationale Naamprijs",
  description: "De jaarlijkse bekroning van excellente naamgeving in Nederland.",
  openGraph: {
    title: "De Nationale Naamprijs",
    description: "Bekroont de beste namen van Nederland.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}