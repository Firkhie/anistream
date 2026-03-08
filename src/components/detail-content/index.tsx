import AnimeCardCarousel from "../anime/AnimeCardCarousel";
import { DetailHero } from "./DetailHero";
import InfoPanel from "./InfoPanel";
import { DetailMain } from "./DetailMain";
import getAnimeDetailById from "@/lib/getAnimeDetailById";
import { AnimeDetail } from "@/types";

export type DetailPreset = "overview" | "watch" | "characters";

export default async function DetailContent({ slug }: { slug: string }) {
  const data: AnimeDetail = await getAnimeDetailById({ id: slug });

  return (
    <div className="flex flex-col gap-2 sm:gap-5">
      <DetailHero banner={data.bannerImage ?? "/assets/test.png"} />
      <div className="flex flex-col gap-3 px-2 sm:gap-4 md:px-5 lg:flex-row">
        <InfoPanel data={data} />
        <DetailMain data={data} />
      </div>
      <AnimeCardCarousel results={data.recommendations ?? []} sectionType="recommendations" />
    </div>
  );
}
