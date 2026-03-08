import { SearchResponse } from "@/types";
import AnimeInfoCard from "./AnimeInfoCard";

export default function AnimeInfoCardList({ results }: { results: SearchResponse["results"] }) {
  if (results.length < 1) return <div>Anime not found.</div>;

  return (
    <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
      {results.map((anime) => (
        <AnimeInfoCard key={anime.id} {...anime} />
      ))}
    </div>
  );
}
