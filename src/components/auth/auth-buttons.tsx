"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import { useRouter } from "next/navigation";

export const AuthButtons = () => {
  const router = useRouter();

  return (
    <ButtonGroup>
      <Button
        className="cursor-pointer"
        variant="default"
        onClick={() => {
          router.push("/auth/login");
        }}
      >
        Login
      </Button>
      <Button
        variant="secondary"
        className="cursor-pointer"
        onClick={() => {
          router.push("/auth/register");
        }}
      >
        Register
      </Button>
    </ButtonGroup>
  );
};
