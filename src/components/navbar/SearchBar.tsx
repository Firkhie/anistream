"use client";

import { Button } from "../ui/Button";
import { ArrowRight, ChevronRight, Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { cn } from "@/lib/utils";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    if (query.length > 0) params.set("query", query);
    else params.delete("query");

    router.push(`/search?${params.toString()}`);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop */}
      <form onSubmit={handleSubmit} className="hidden flex-1 items-center gap-1.5 md:flex">
        <div className="flex w-full items-center justify-between gap-2 rounded-sm border px-4 py-2">
          <Search className="h-4 w-4 shrink-0" />
          <input
            name="query"
            className="flex-1 bg-transparent text-sm outline-none focus:ring-0"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anime..."
            autoComplete="off"
          />
          <X
            className={cn(
              "text-foreground/50 h-4 w-4 shrink-0 cursor-pointer",
              query.length > 0 ? "" : "hidden",
            )}
            onClick={() => setQuery("")}
          />
        </div>
        <Button type="submit" size="icon">
          <Search />
        </Button>
      </form>

      {/* Mobile */}
      <Button size="icon" className="md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
        <Search />
      </Button>

      <form
        onSubmit={handleSubmit}
        className={clsx(
          "bg-background absolute -bottom-11.5 left-0 z-50 w-full border-t border-b px-4 py-1 md:hidden",
          "transition-all duration-200 ease-out",
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <div className="flex w-full items-center gap-2 py-2">
          <Search className="h-4 w-4 shrink-0" />
          <input
            name="query"
            className="flex-1 bg-transparent text-sm outline-none focus:ring-0"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anime..."
            autoComplete="off"
          />
          <div className="flex items-center justify-center gap-2.5">
            <X
              className={cn(
                "text-foreground/50 h-4 w-4 shrink-0 cursor-pointer",
                query.length > 0 ? "" : "hidden",
              )}
              onClick={() => setQuery("")}
            />
            <Button type="submit" variant="none" size="none">
              <ArrowRight className="text-foreground h-4 w-4 shrink-0" />
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
