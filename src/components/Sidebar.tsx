"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarRange, CircleUser, Flame, History, House } from "lucide-react";
import { cn } from "@/lib/utils";

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

  return (
    <div className="fixed left-0 top-16 h-full border-r-2 flex flex-col gap-3 w-20 z-50">
      {sidebarItems.map((item) => (
        <Link
          key={item.title}
          href={item.path}
          className="flex flex-col gap-2 items-center px-2 py-3"
        >
          <item.icon className="w-5 h-5" />
          <span className={cn("text-xs", pathname === item.path && "uppercase")}>{item.title}</span>
        </Link>
      ))}
    </div>
  );
}
