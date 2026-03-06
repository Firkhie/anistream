import useAnimeCharactersById from "@/hooks/useAnimeCharactersById";
import { MicVocal } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import Select from "react-select";
import AnimeCharacterCard from "../anime/AnimeCharacterCard";
import AnimeCharacterCardSkeleton from "../anime/AnimeCharacterCardSkeleton";

type LanguageOption = {
  value: string;
  label: string;
};

const languageOptions: LanguageOption[] = [
  { value: "japanese", label: "Japanese" },
  { value: "english", label: "English" },
  { value: "indonesia", label: "Indonesia" },
];

export default function CharactersSection() {
  const { slug } = useParams();
  const { data, loading } = useAnimeCharactersById({ id: slug as string });

  const [selectedLang, setSelectedLang] = useState<LanguageOption>(languageOptions[0]);

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
      {loading ? (
        <AnimeCharacterCardSkeleton count={3} />
      ) : !data?.results?.length ? (
        <div className="text-muted-foreground text-sm">Characters not found.</div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(398px,1fr))] gap-2">
          {data.results.map((char) => (
            <AnimeCharacterCard key={char.id} char={char} lang={selectedLang} />
          ))}
        </div>
      )}
    </div>
  );
}
