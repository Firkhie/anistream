"use client";

import { toast } from "sonner";
import { CharacterResponse } from "@/types";
import { useEffect, useState } from "react";
import getAnimeCharactersById from "@/lib/getAnimeCharactersById";

export default function useAnimeCharactersById({ id }: { id: string }) {
  const [data, setData] = useState<CharacterResponse>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data: CharacterResponse = await getAnimeCharactersById({ id });
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
