import SearchLoader from "@/components/SearchLoader";
import SearchFilter from "@/components/SearchFilter";

export default function SearchPage() {
  return (
    <div className="flex flex-col gap-4">
      <SearchFilter />
      <SearchLoader />
    </div>
  );
}
