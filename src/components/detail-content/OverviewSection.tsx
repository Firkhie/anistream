import { AnimeDetail } from "@/types";
import { Blend, Users } from "lucide-react";
import AnimeRankCard from "../anime/AnimeRankCard";
import AnimeCharacterCard from "../anime/AnimeCharacterCard";
import { useState } from "react";

export default function OverviewContent({ data }: { data: AnimeDetail }) {
  const selectedLang = { value: "japanese", label: "Japanese" };
  const [showAllRelations, setShowAllRelations] = useState(false);

  const visibleRelations = showAllRelations ? data.relations : data.relations?.slice(0, 5);

  return (
    <div className="flex w-full flex-col gap-4">
      {/* Trailer Section */}
      <div className="h-96 w-full overflow-hidden rounded-sm">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${data?.trailer?.id || ""}`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>

      {/* Characters Section */}
      {data.characters && data.characters.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-x-2">
            <Users className="h-5 w-5" />
            <h4>Characters</h4>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(398px,1fr))] gap-2">
            {data.characters.map((char) => (
              <AnimeCharacterCard key={char.id} char={char} lang={selectedLang} />
            ))}
          </div>
        </div>
      )}

      {/* Relations Section */}
      {data.relations && data.relations.length > 0 && (
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-2">
            <Blend className="h-5 w-5" />
            <h4>Relations</h4>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(398px,1fr))] gap-2">
            {visibleRelations?.map((anime) => (
              <AnimeRankCard key={anime.id} {...anime} />
            ))}
            {data.relations.length > 5 && (
              <div
                onClick={() => setShowAllRelations((prev) => !prev)}
                className="bg-secondary/75 flex h-24 shrink-0 cursor-pointer flex-col items-center justify-center gap-1 overflow-hidden rounded-sm text-sm hover:opacity-75"
              >
                <span className="text-sm font-medium">
                  {showAllRelations ? "Show Less" : "Show More"}
                </span>
                <span className="text-xs opacity-60">
                  {showAllRelations
                    ? "Hide extra relations"
                    : `+${data.relations.length - 5} more titles`}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
