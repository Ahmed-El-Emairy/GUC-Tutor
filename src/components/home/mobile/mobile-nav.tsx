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
import { currentUser } from "@/lib/auth";
import { UserProfileIcon } from "@/components/home/user-profile";
export const MobileNav = async () => {
  const user = await currentUser();
  const isAdmin = user?.role === "ADMIN";
  return (
    <Sheet>
      <SheetTrigger className="flex sm:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="top" className="bg-slate-700">
        <SheetHeader>
          <SheetTitle className="text-center">Menu</SheetTitle>
          <div className="flex justify-center gap-4">
            {user && <UserProfileIcon />}
            <ActionButton
              variant="secondary"
              text="Explore !"
              url="/material"
            />
            {isAdmin && (
              <ActionButton
                variant="action"
                text="Dashboard"
                url="/dashboard"
              />
            )}
            {!user && (
              <ButtonGroup>
                <ActionButton
                  variant="default"
                  text="Login"
                  url="/auth/login"
                />
                <ActionButton
                  variant="secondary"
                  text="Register"
                  url="/auth/register"
                />
              </ButtonGroup>
            )}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
