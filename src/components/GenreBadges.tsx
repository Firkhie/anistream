"use client";

import Link from "next/link";
import { Badge } from "./ui/Badge";
import { currentYear } from "@/constants/years";

type GenreBadgeProps = {
  genre: string;
  color: string;
};

export default function GenreBadge({ genre, color }: GenreBadgeProps) {
  return (
    <Link
      href={`/search?${new URLSearchParams({
        year: String(currentYear),
        sort: "POPULARITY_DESC",
        genres: genre,
      }).toString()}`}
      onClick={(e) => e.stopPropagation()}
    >
      <Badge
        className="shrink-0 cursor-pointer rounded-sm px-4 py-1 whitespace-nowrap hover:opacity-75"
        style={{
          backgroundColor: `${color}45`,
          color: color,
        }}
      >
        {genre}
      </Badge>
    </Link>
  );
}
