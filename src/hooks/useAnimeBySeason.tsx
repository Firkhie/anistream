"use client";

import { toast } from "sonner";
import { SearchResponse } from "@/types";
import { useEffect, useState } from "react";
import getAnimeBySeason from "@/lib/getAnimeBySeason";

export default function useAnimeBySeason({
  season,
}: {
  season: "winter" | "spring" | "summer" | "fall";
}) {
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
        const data: SearchResponse = await getAnimeBySeason({ season });
        setData(data);
      } catch (error) {
        console.log("[ERROR_SEASON]: ", error);
        toast.error("Fetch anime failed.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [season]);

  return { data, loading };
}
