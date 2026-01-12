import { Character } from "@/types";
import Image from "next/image";

export default function AnimeCharacterCard({
  char,
  lang,
}: {
  char: Character;
  lang: { value: string; label: string };
}) {
  const charName = char.name?.userPreferred ?? char.name?.full ?? "-";

  const actor = lang
    ? char.voiceActors?.find((act) => act.language?.toLowerCase() === lang.value)
    : null;

  return (
    <div className="bg-secondary/75 flex h-24 justify-between rounded-sm text-xs sm:text-[13px]">
      {/* Character Info */}
      <div className="relative flex gap-x-1">
        <div className="relative aspect-2/3 h-24">
          <Image
            src={char.image ?? "/assets/not-found.png"}
            alt={charName}
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
        <div className="relative flex gap-x-1">
          <div className="flex flex-col items-end justify-between p-2">
            <p className="text-end">{actor.name?.userPreferred ?? actor.name?.full ?? "-"}</p>
            <p className="text-muted-foreground font-extralight">{actor.language ?? "-"}</p>
          </div>

          <div className="relative aspect-2/3 h-24">
            <Image
              src={actor.image ?? "/assets/not-found.png"}
              alt={actor.name?.full ?? "Voice Actor"}
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
}
