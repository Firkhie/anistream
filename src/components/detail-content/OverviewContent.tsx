import { AnimeDetail } from "@/types";
import { Users } from "lucide-react";
import Image from "next/image";

export default function OverviewContent({ data }: { data: AnimeDetail }) {
  return (
    <div>
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
      {data?.characters && data.characters.length > 0 && (
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-2">
            <Users className="h-4 w-4 sm:h-5 sm:w-5" />
            <p className="text-sm sm:text-base">Characters</p>
          </div>
          <div className="grid gap-3 min-[1100px]:grid-cols-2 min-[1400px]:grid-cols-3">
            {data.characters.map((char) => {
              const actor = char.voiceActors!.find(
                (actor) => actor.language.toUpperCase() === "JAPANESE",
              );

              return (
                <div
                  key={char.id}
                  className="bg-secondary/50 flex h-24 justify-between rounded-md text-xs sm:text-[13px]"
                >
                  {/* Character Info */}
                  <div className="relative flex gap-x-1">
                    <div className="relative aspect-2/3 h-24">
                      <Image
                        src={char?.image ?? "/assets/not-found.png"}
                        alt="OK"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        fill
                        className="rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col justify-between p-2">
                      <p>{char.name!.userPreferred || char.name!.full || "-"}</p>
                      <p className="font-extralight text-[hsl(var(--muted-foreground))]">
                        {char.role ?? "-"}
                      </p>
                    </div>
                  </div>

                  {/* Voice Actor Info */}
                  {actor && (
                    <div key={actor.id} className="relative flex gap-x-1">
                      <div className="flex flex-col items-end justify-between p-2">
                        <p className="text-end">
                          {actor.name!.userPreferred || actor.name!.full || "-"}
                        </p>
                        <p className="font-extralight text-[hsl(var(--muted-foreground))]">
                          {actor.language ?? "-"}
                        </p>
                      </div>
                      <div className="relative h-24 w-[72px] flex-shrink-0 overflow-hidden rounded-r-sm">
                        <Image
                          alt="Image"
                          src={actor.image!}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
