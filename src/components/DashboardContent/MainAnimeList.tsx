import { SearchResponse } from "@/types";
import AnimeCard from "../anime/AnimeCard";

export default function MainAnimeList({ results }: { results: SearchResponse["results"] }) {
  if (results.length < 1) return <div>Anime not found.</div>;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
      {results.map((anime) => (
        <AnimeCard key={anime.id} {...anime} />
      ))}
    </div>
  );
}
