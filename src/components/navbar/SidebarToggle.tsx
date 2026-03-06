"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/Button";
import { useSidebarStore } from "@/store/useSidebarStore";

export default function SidebarToggle() {
  const { setIsOpen } = useSidebarStore();

  return (
    <Button size={"icon"} variant={"secondary"} onClick={() => setIsOpen()}>
      <Menu />
    </Button>
  );
}
