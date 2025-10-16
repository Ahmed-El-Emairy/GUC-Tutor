import { ButtonGroup } from "@/components/ui/button-group";
import { ActionButton } from "@/components/auth/action-buuton";
import { currentUser } from "@/lib/auth";
import { UserProfileIcon } from "@/components/home/user-profile";

export const Nav = async () => {
  const user = await currentUser();
  return (
    <nav className="sm:flex flex-row gap-2 hidden">
      {user && <UserProfileIcon />}
      <ActionButton variant="secondary" text="Explore !" url="/material" />
      {!user && (
        <ButtonGroup>
          <ActionButton variant="default" text="Login" url="/auth/login" />
          <ActionButton
            variant="secondary"
            text="Register"
            url="/auth/register"
          />
        </ButtonGroup>
      )}
    </nav>
  );
};
