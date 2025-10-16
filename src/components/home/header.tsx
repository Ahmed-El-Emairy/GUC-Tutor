import Image from "next/image";
import { Nav } from "@/components/home/nav-bar";
import { MobileNav } from "@/components/home/mobile/mobile-nav";

export const Header = () => {
  return (
    <header className="flex flex-row px-2 py-2 justify-evenly">
      <div>
        <Image src="/logo.png" width={100} height={100} alt="GUC logo" />
      </div>
      <Nav />
      <MobileNav />
    </header>
  );
};
