"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarRange, CircleUser, Flame, History, House, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";
import Logo from "./Logo";
import { Button } from "./ui/Button";

const sidebarItems = [
  {
    title: "Home",
    icon: House,
    path: "/",
  },
  {
    title: "Trending",
    icon: Flame,
    path: "/trending",
  },
  {
    title: "Schedule",
    icon: CalendarRange,
    path: "/schedule",
  },
  {
    title: "History",
    icon: History,
    path: "/history",
  },
  {
    title: "Profile",
    icon: CircleUser,
    path: "/profile",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useSidebarStore();

  return (
    <>
      {/* Desktop */}
      <div className="bg-background fixed top-16 left-0 z-40 hidden h-full w-20 flex-col border-r md:flex">
        {sidebarItems.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            className={cn(
              "flex flex-col items-center gap-2 border-b px-2 py-5",
              pathname === item.path && "border-r-primary border-r-3",
            )}
          >
            <item.icon className={cn("h-5 w-5", pathname === item.path && "text-primary")} />
            <span className={cn("text-xs", pathname === item.path && "text-primary")}>
              {item.title}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile */}

      <div
        className={cn(
          "bg-background fixed top-0 left-0 z-90 flex h-full w-full flex-col gap-1 md:hidden",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 p-3">
          <Logo />
          <Button size={"round"} variant={"secondary"} onClick={() => setIsOpen()}>
            <X />
          </Button>
        </div>

        <hr />

        {/* Content */}
        <div className="flex flex-col gap-2 p-3">
          {sidebarItems.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className={cn(
                "flex items-center gap-2 rounded-sm px-3 py-5",
                pathname === item.path ? "bg-primary/15 border-primary border-r-4" : "bg-muted/25",
              )}
              onClick={() => setIsOpen()}
            >
              <item.icon className={cn("h-5 w-5", pathname === item.path && "text-primary")} />
              <span className={cn("", pathname === item.path && "text-primary")}>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
