import { Header } from "@/components/home/header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-col bg-slate-800">
      <Header />
      {children}
    </div>
  );
}
