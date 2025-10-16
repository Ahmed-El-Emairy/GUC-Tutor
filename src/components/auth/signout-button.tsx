import { signOut } from "../../../auth";
import { Button } from "../ui/button";

export const SignoutButton = async () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button variant={"destructive"} type="submit" className="cursor-pointer">
        Sign Out
      </Button>
    </form>
  );
};
