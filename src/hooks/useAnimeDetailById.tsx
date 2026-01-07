"use client";

import { toast } from "sonner";
import { AnimeDetail, SearchResponse } from "@/types";
import { useEffect, useState } from "react";
import getAnimeDetailById from "@/lib/getAnimeDetailById";

export default function useAnimeDetailById({ id }: { id: string }) {
  const [data, setData] = useState<AnimeDetail>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data: AnimeDetail = await getAnimeDetailById({ id });
        setData(data);
      } catch (error) {
        console.log("[ERROR_DETAIL]: ", error);
        toast.error("Fetch anime failed.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return { data, loading };
}
