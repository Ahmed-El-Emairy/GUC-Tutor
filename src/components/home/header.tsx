import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const Header = () => {
  return (
    <header className="flex flex-row px-2 py-2 justify-between">
      <div>
        <Image src="/logo.png" width={100} height={100} alt="GUC logo" />
      </div>
      <nav className="flex flex-row gap-2">
        <Button variant="secondary" className="cursor-pointer">
          Explore !
        </Button>
        {/* TODO: Make the button group only show if the user is not logged in */}
        <ButtonGroup>
          <Button className="cursor-pointer" variant="default">
            Login
          </Button>
          <Button variant="secondary" className="cursor-pointer">
            Register
          </Button>
        </ButtonGroup>
      </nav>
    </header>
  );
};
