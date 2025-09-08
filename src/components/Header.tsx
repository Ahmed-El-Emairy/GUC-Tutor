"use client";

import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header>
      {/* PC Header */}
      <nav className="flex items-center justify-between flex-row px-6 py-4 bg-slate-700  border-slate-600 border-b-2">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={"/Uni-logo.png"}
            width={100}
            height={50}
            alt="logo"
            className=""
          />
        </div>
        <Input
          bgColor="slate-800"
          focusOutlineColor="blue-500"
          hasIcon={true}
          outlineColor="slate-600"
          textColor="slate-50"
          textSize="sm"
          Icon={MagnifyingGlassIcon}
          extraIconClasses="icon-center"
          iconColor="slate-50"
          iconSize="7"
          placeholder="Search"
          textIndent="10"
          rounded={true}
          type="search"
          extraContainerClasses="md:flex hidden flex-1 basis-[40%]"
        />
        <div className="flex-1 flex items-center justify-center">
          <Button
            bgColor="slate-800"
            text="Login"
            textColor="slate-50"
            textSize="lg"
            rounded={true}
            extraClasses="outline outline-slate-600 hover:outline-blue-500 hover:outline-2"
            onClick={() => {
              router.push("/login");
            }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
