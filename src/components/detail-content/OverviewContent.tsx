import { AnimeDetail } from "@/types";
import { Users } from "lucide-react";
import Image from "next/image";

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
        <div className="flex flex-col gap-y-3">
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
                        sizes="(max-width: 768px) 100vw, 50vw"
                        fill
                        className="rounded-l-sm"
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
                          alt={actor.id}
                          src={actor.image ?? "/assets/not-found.png"}
                          fill
                          className="rounded-r-sm"
                          sizes="(max-width: 768px) 100vw, 50vw"
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
    </div>
  );
}
