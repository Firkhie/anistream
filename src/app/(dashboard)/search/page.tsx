import AnimeSearchLoader from "@/components/anime/AnimeSearchLoader";
import SearchFilter from "@/components/SearchFilter";

export default function SearchPage() {
  return (
    <div className="flex flex-col gap-4">
      <SearchFilter />
      <AnimeSearchLoader />
    </div>
  );
}
