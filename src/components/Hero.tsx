import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import getAnimeByPreset from "@/lib/getAnimeByPreset";
import { SearchResponse } from "@/types";
import parse from "html-react-parser";
import { Button } from "./ui/Button";
import { removeBrTags } from "@/lib/utils";
import {
  Calendar1,
  ClosedCaption,
  Info,
  LucideIcon,
  Monitor,
  PlayCircle,
  Star,
} from "lucide-react";
import { Badge } from "./ui/Badge";

const heroBadges: {
  key: "format" | "currentEpisode" | "rating" | "year";
  icon: LucideIcon;
}[] = [
  { key: "format", icon: Monitor },
  { key: "currentEpisode", icon: ClosedCaption },
  { key: "rating", icon: Star },
  { key: "year", icon: Calendar1 },
];

export default async function Hero() {
  const data: SearchResponse = await getAnimeByPreset({ preset: "popular" });

  if (data.results.length < 1) return <div>Anime not found.</div>;

  const episodes = ``;

  return (
    <Carousel opts={{ loop: true }} className="rounded-sm overflow-hidden">
      {/* Content */}
      <CarouselContent>
        {data.results
          .filter((item) => item.bannerImage)
          .map((anime) => {
            const title =
              anime.title?.userPreferred ||
              anime.title?.romaji ||
              anime.title?.english ||
              anime.title?.native ||
              "Untitled";

            const description = anime.description || "No description found.";

            return (
              <CarouselItem
                key={anime.id}
                className="flex items-end h-[350px] lg:h-[480px] rounded-sm w-full bg-cover bg-center text-white"
                style={{
                  backgroundImage: `url(${anime.bannerImage})`,
                }}
              >
                <div className="flex gap-4 lg:gap-0 flex-col lg:flex-row p-5">
                  {/* Badges, Title, & Description */}
                  <div className="flex flex-1 flex-col gap-2 ">
                    <div className="flex gap-1 ">
                      {heroBadges.map(({ icon: Icon, key }) => {
                        const value = anime[key];
                        if (!value) return;

                        return (
                          <Badge key={key} icon={Icon} className="rounded-sm text-black">
                            {value}
                          </Badge>
                        );
                      })}
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-semibold line-clamp-2">{title}</h1>
                    <span className="line-clamp-2 lg:line-clamp-3">
                      {parse(removeBrTags(description))}
                    </span>
                  </div>
                  {/* Buttons */}
                  <div className="flex flex-1 gap-2 items-end lg:justify-end">
                    <Button size={"lg"} variant={"secondary"}>
                      <Info />
                      Details
                    </Button>
                    <Button size={"lg"} variant={"secondary"}>
                      <PlayCircle />
                      Watch Now
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
      </CarouselContent>

      {/* Buttons */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
