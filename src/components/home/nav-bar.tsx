import { ButtonGroup } from "@/components/ui/button-group";
import { ActionButton } from "@/components/auth/action-buuton";

export const Nav = () => {
  return (
    <nav className="sm:flex flex-row gap-2 hidden">
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
    </nav>
  );
};
