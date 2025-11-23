import SubSection from "./SubSection";
import MainSection from "./MainSection";
import { SearchResponse } from "@/types";
import getAnimeByPreset from "@/lib/getAnimeByPreset";

export default async function DashboardContent() {
  const initialData: SearchResponse = await getAnimeByPreset({ preset: "newest" });

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <MainSection initialData={initialData} />
      <SubSection />
    </div>
  );
}
