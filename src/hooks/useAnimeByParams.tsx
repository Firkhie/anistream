"use client";

import { toast } from "sonner";
import { SearchResponse } from "@/types";
import { useEffect, useState } from "react";
import getAnimeByParams from "@/lib/getAnimeByParams";
import { ReadonlyURLSearchParams } from "next/navigation";

export default function useAnimeByParams({ filters }: { filters: Record<string, string> }) {
  const [data, setData] = useState<SearchResponse>({
    currentPage: null,
    hasNextPage: null,
    results: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data: SearchResponse = await getAnimeByParams({ filters });
        setData(data);
      } catch (error) {
        console.log("[ERROR_QUERY]: ", error);
        toast.error("Fetch anime failed.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [JSON.stringify(filters)]);

  return { data, loading };
}
