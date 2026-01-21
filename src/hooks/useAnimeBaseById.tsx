"use client";

import { toast } from "sonner";
import { AnimeBase } from "@/types";
import { useEffect, useState } from "react";
import getAnimeBaseById from "@/lib/getAnimeBaseById";

export default function useAnimeBaseById({ id }: { id: string }) {
  const [data, setData] = useState<AnimeBase>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data: AnimeBase = await getAnimeBaseById({ id });
        setData(data);
      } catch (error) {
        console.log("[ERROR_BASE]: ", error);
        toast.error("Fetch anime failed.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return { data, loading };
}
