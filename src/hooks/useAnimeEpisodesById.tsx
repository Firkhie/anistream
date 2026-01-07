"use client";

import { toast } from "sonner";
import { AnimeEpisode } from "@/types";
import { useEffect, useState } from "react";
import getAnimeEpisodesById from "@/lib/getAnimeEpisodesById";

export default function useAnimeEpisodesById({ id }: { id: string }) {
  const [data, setData] = useState<AnimeEpisode[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data: AnimeEpisode[] = await getAnimeEpisodesById({ id });
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
