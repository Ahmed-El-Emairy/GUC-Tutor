import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-col justify-between bg-slate-800">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
