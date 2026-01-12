import { AnimeDetail } from "@/types";
import { Blend, Users } from "lucide-react";
import Image from "next/image";
import AnimeRankCard from "../anime/AnimeRankCard";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/Carousel";

export default function OverviewContent({ data }: { data: AnimeDetail }) {
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
            {data.characters.map((char) => {
              const actor = char.voiceActors?.[0] ?? null;
              const charName = char.name!.userPreferred || char.name!.full || "-";

              return (
                <div
                  key={char.id}
                  className="bg-secondary/75 flex h-24 justify-between rounded-sm text-xs sm:text-[13px]"
                >
                  {/* Character Info */}
                  <div className="relative flex gap-x-1">
                    <div className="relative aspect-2/3 h-24">
                      <Image
                        src={char.image ?? "/assets/not-found.png"}
                        alt={char.id}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="rounded-l-sm object-cover object-center"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col justify-between p-2">
                      <p>{charName}</p>
                      <p className="text-muted-foreground font-extralight">{char.role ?? "-"}</p>
                    </div>
                  </div>

                  {/* Voice Actor Info */}
                  {actor && (
                    <div key={actor.id} className="relative flex gap-x-1">
                      <div className="flex flex-col items-end justify-between p-2">
                        <p className="text-end">
                          {actor.name?.userPreferred || actor.name?.full || "-"}
                        </p>
                        <p className="text-muted-foreground font-extralight">
                          {actor.language ?? "-"}
                        </p>
                      </div>
                      <div className="relative aspect-2/3 h-24">
                        <Image
                          src={actor.image ?? "/assets/not-found.png"}
                          alt={actor.id}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="rounded-r-sm object-cover object-center"
                          unoptimized
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
