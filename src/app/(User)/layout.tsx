import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-slate-800">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
