"use client";

import { toast } from "sonner";
import getAnimeByPreset, { Preset } from "@/lib/getAnimeByPreset";
import { SearchResponse } from "@/types";
import { useEffect, useState } from "react";

export default function useAnimeByPreset({
  preset,
  page,
  initialData,
}: {
  preset: Preset;
  page: number;
  initialData?: SearchResponse;
}) {
  const [data, setData] = useState<SearchResponse>(
    initialData || {
      currentPage: null,
      hasNextPage: null,
      results: [],
    }
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data: SearchResponse = await getAnimeByPreset({ preset, page });
        setData(data);
      } catch (error) {
        console.log("[ERROR_PRESET]: ", error);
        toast.error("Fetch anime failed.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [preset, page]);

  return { data, loading };
}
