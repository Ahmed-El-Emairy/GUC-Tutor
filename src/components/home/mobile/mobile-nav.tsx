import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex sm:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="top" className="bg-slate-700">
        <SheetHeader>
          <SheetTitle className="text-center">Menu</SheetTitle>
          <div className="flex justify-center gap-4">
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
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
