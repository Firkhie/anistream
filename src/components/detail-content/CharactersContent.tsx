import useAnimeCharactersById from "@/hooks/useAnimeCharactersById";
import { MicVocal } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import Select from "react-select";

type LanguageOption = {
  value: string;
  label: string;
};

const languageOptions: LanguageOption[] = [
  { value: "japanese", label: "Japanese" },
  { value: "english", label: "English" },
  { value: "indonesia", label: "Indonesia" },
];

export default function CharactersContent() {
  const { slug } = useParams();
  const { data, loading } = useAnimeCharactersById({ id: slug as string });

  const [selectedLang, setSelectedLang] = useState<LanguageOption | null>(languageOptions[0]);

  if (loading) return <div>Loading...</div>;
  if (!data?.results?.length) return <div>Characters not found.</div>;

  return (
    <div className="flex flex-col gap-3">
      {/* Header */}
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-x-2">
          <MicVocal className="h-5 w-5" />
          <h4>Characters & Voice Actors</h4>
        </div>

        <Select
          placeholder="Select language"
          options={languageOptions}
          value={selectedLang}
          onChange={(option) => option && setSelectedLang(option)}
          className="my-react-select-container"
          classNamePrefix="my-react-select"
        />
      </div>

      {/* Characters */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(398px,1fr))] gap-2">
        {data.results.map((char) => {
          const charName = char.name?.userPreferred ?? char.name?.full ?? "-";

          const actor = selectedLang
            ? char.voiceActors?.find((act) => act.language?.toLowerCase() === selectedLang.value)
            : null;

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
                    <p className="text-end">
                      {actor.name?.userPreferred ?? actor.name?.full ?? "-"}
                    </p>
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
        })}
      </div>
    </div>
  );
}
