import { currentUser } from "@/lib/auth";
import { UserIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignoutButton } from "../auth/signout-button";

export const UserProfileIcon = async () => {
  const user = await currentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-slate-600 aspect-square p-2 rounded-full">
        <UserIcon className="text-slate-50 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex justify-center items-center flex-col">
        <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
