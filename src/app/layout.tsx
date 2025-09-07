import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GUC TUTOR",
  description: "The path way to smooth Engineering life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
