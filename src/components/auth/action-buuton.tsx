"use client";

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

interface actionButtonProps {
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "action"
    | null
    | undefined;
  url: string;
  text: string;
}

export const ActionButton = ({ variant, url, text }: actionButtonProps) => {
  const router = useRouter();

  return (
    <Button
      className="cursor-pointer"
      variant={variant}
      onClick={() => {
        router.push(url);
      }}
    >
      {text}
    </Button>
  );
};
