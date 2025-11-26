"use client";

import { Button } from "../ui/Button";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const query = formData.get("query")?.toString() ?? "";

    const params = new URLSearchParams(searchParams.toString());
    if (query.length > 0) params.set("query", query);
    else params.delete("query");

    router.push(`search?${params.toString()}`);
  };

  return (
    <form onSubmit={(value) => handleSubmit(value)} className="flex items-center gap-1.5 flex-1">
      <div className="px-4 py-2 flex justify-between items-center gap-2 border rounded-sm w-full">
        <Search className="shrink-0 w-4 h-4" />
        <input
          name="query"
          className="outline-none focus:outline-none focus:ring-0 bg-transparent flex-1 text-sm"
          autoComplete="off"
          placeholder="Search anime..."
        />
      </div>
      <Button size="icon">
        <Search />
      </Button>
    </form>
  );
}
