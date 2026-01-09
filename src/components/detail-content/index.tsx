import AnimeCardCarousel from "../anime/AnimeCardCarousel";
import { DetailHero } from "./DetailHero";
import InfoPanel from "./InfoPanel";
import { DetailMain } from "./DetailMain";
import getAnimeDetailById from "@/lib/getAnimeDetailById";
import { AnimeDetail } from "@/types";

export type DetailPreset = "overview" | "watch" | "characters";

export default async function DetailContent({ slug }: { slug: string }) {
  const data: AnimeDetail = await getAnimeDetailById({ id: slug });

  if (!data) return <div>404</div>;
  return (
    <div>
      <DetailHero banner={data.bannerImage ?? "/assets/test.png"} />
      <div className="flex flex-row gap-5 p-5">
        <InfoPanel data={data} />
        <DetailMain data={data} />
      </div>
      <AnimeCardCarousel results={data.recommendations ?? []} sectionType="recommendations" />
    </div>
  );
}
