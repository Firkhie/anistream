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
import Link from "next/link";

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
    <Carousel opts={{ loop: true }} className="overflow-hidden rounded-sm">
      {/* Content */}
      <CarouselContent>
        {data.results
          .filter((item) => item.bannerImage)
          .map((anime, index) => {
            const title =
              anime.title?.userPreferred ||
              anime.title?.romaji ||
              anime.title?.english ||
              anime.title?.native ||
              "Untitled";

            const description = anime.description || "No description found.";

            return (
              <CarouselItem
                key={`${index}_${anime.id}`}
                className="relative flex h-[284px] w-full items-end rounded-sm bg-cover bg-center select-none md:h-[350px] lg:h-[480px]"
                style={{
                  backgroundImage: `url(${anime.bannerImage})`,
                }}
              >
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black/75"></div>
                <div className="z-10 flex w-full flex-col gap-4 p-5 lg:flex-row lg:gap-0">
                  {/* Badges, Title, & Description */}
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex gap-1">
                      {heroBadges.map(({ icon: Icon, key }) => {
                        const value = anime[key];
                        if (!value) return;

                        return (
                          <Badge
                            key={key}
                            icon={Icon}
                            className="shrink-0 rounded-sm whitespace-nowrap text-white/75"
                          >
                            {value}
                          </Badge>
                        );
                      })}
                    </div>
                    <h1 className="line-clamp-2 text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl">
                      {title}
                    </h1>
                    <div className="hidden text-sm text-white md:line-clamp-2 lg:line-clamp-3">
                      {parse(description)}
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="flex flex-1 items-end gap-2 lg:justify-end">
                    <Link href={`/detail/${anime.id}`}>
                      <Button size={"lg"} variant={"secondary"}>
                        <Info />
                        Details
                      </Button>
                    </Link>
                    <Link href={`/watch/${anime.id}`}>
                      <Button size={"lg"} variant={"secondary"}>
                        <PlayCircle />
                        Watch Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
      </CarouselContent>

      {/* Buttons */}
      <CarouselPrevious variant={"secondary"} />
      <CarouselNext variant={"secondary"} />
    </Carousel>
  );
}
