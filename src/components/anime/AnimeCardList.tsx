import { SearchResponse } from "@/types";
import AnimeCard from "./AnimeCard";

export default function AnimeCardList({ results }: { results: SearchResponse["results"] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(142px,1fr))] gap-4 md:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
      {results.map((anime) => (
        <AnimeCard key={anime.id} {...anime} />
      ))}
    </div>
  );
}
