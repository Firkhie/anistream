import { AnimeDetail } from "@/types";
import { Blend, Users } from "lucide-react";
import AnimeRankCard from "../anime/AnimeRankCard";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/Carousel";
import AnimeCharacterCard from "../anime/AnimeCharacterCard";

export default function OverviewContent({ data }: { data: AnimeDetail }) {
  const selectedLang = { value: "japanese", label: "Japanese" };

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
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {data.relations.map((anime) => (
                <CarouselItem key={anime.id} className="basis-1/3 pl-2">
                  <AnimeRankCard key={anime.id} {...anime} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      )}
    </div>
  );
}
