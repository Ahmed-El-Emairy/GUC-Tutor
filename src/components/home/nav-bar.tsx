import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const Nav = () => {
  return (
    <nav className="sm:flex flex-row gap-2 hidden">
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
  );
};
