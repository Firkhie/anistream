import animeDummy from "@/data/anime-dummy.json";
import AnimeCard from "../ui/AnimeCard";
import { AnimeBasic } from "@/types";

export default function UpdatedAnimeSection() {
  const data: AnimeBasic[] = animeDummy as AnimeBasic[];
  return (
    <div className="flex flex-col gap-4">
      {/* Buttons */}
      <div className="flex justify-between"></div>

      {/* Cards */}
      <div className="grid grid-cols-5 gap-4">
        {data.map((anime) => (
          <AnimeCard key={anime.id} {...anime} />
        ))}
      </div>
    </div>
  );
}
