import { ContactRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export const Footer = () => {
  return (
    <footer className="flex flex-col px-6 py-3 bg-slate-950 gap-4 lg:flex-row">
      <div className="flex-1 flex flex-col gap-4">
        <Item variant="outline">
          <ItemMedia>
            <Avatar className="size-10">
              <AvatarImage src="https://media.licdn.com/dms/image/v2/D4E03AQFgAXd_g0v_bw/profile-displayphoto-shrink_800_800/B4EZi1UU56GoAc-/0/1755388662708?e=1762992000&v=beta&t=e2lPNuRsbr1G2frEVavmGBjgfJUyi71bG8vv0E4FVXk" />
              <AvatarFallback>Eslam Suliman</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-slate-50">Eslam Suliman</ItemTitle>
            <ItemDescription>Role: Editor-in-Chief</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button
              size="icon-sm"
              variant="outline"
              className="rounded-full bg-slate-950 text-slate-50 hover:text-slate-950 transition-all cursor-pointer"
              aria-label="Invite"
            >
              <a
                href="https://www.linkedin.com/in/eslam-suliman-5a3481344/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContactRound />
              </a>
            </Button>
          </ItemActions>
        </Item>
        <Item variant="outline">
          <ItemMedia>
            <Avatar className="size-10">
              <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQEXTIXHMO910Q/profile-displayphoto-scale_400_400/B56ZhMby.OHQAg-/0/1753629012820?e=1762992000&v=beta&t=Qdsvrxx0u45SBCpRubFeHXMb_GGxyG-f4rXamWeW_a4" />
              <AvatarFallback>Ahmed Omar</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-slate-50">Ahmed Omar</ItemTitle>
            <ItemDescription>Role: Web Developer / Designer</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button
              size="icon-sm"
              variant="outline"
              className="rounded-full bg-slate-950 text-slate-50 hover:text-slate-950 transition-all cursor-pointer"
              aria-label="Contact"
            >
              <a
                href="https://www.linkedin.com/in/ahmed-omar-1b2525366/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContactRound />
              </a>
            </Button>
          </ItemActions>
        </Item>
      </div>
      <div className="flex-1 flex justify-center items-center text-slate-50 text-3xl">
        © 2025 GUC Tutor
      </div>
    </footer>
  );
};
