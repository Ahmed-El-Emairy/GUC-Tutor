import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ActionButton } from "@/components/auth/action-buuton";
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
            <ActionButton variant="secondary" text="Explore !" url="/*" />
            {/* TODO: Make the button group only show if the user is not logged in */}
            <ButtonGroup>
              <ActionButton variant="default" text="Login" url="/auth/login" />
              <ActionButton
                variant="secondary"
                text="Register"
                url="/auth/register"
              />
            </ButtonGroup>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
