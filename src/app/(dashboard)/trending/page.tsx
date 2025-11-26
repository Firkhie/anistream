import TrendingFilter from "@/components/TrendingFilter";
import TrendingLoader from "@/components/TrendingLoader";
import getAnimeByPreset from "@/lib/getAnimeByPreset";
import { SearchResponse } from "@/types";

export default async function TrendingPage() {
  const initialData: SearchResponse = await getAnimeByPreset({ preset: "newest" });

  return (
    <div className="flex flex-col gap-4">
      <TrendingFilter />
      <TrendingLoader initialData={initialData} />
    </div>
  );
}
