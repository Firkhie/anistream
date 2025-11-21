import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import animeDummy from "@/data/anime-dummy.json";
import { AnimeBasic } from "@/types";

export default function Hero() {
  const data: AnimeBasic[] = animeDummy as AnimeBasic[];

  return (
    <Carousel opts={{ loop: true }} className="rounded-sm overflow-hidden">
      {/* Content */}
      <CarouselContent>
        {data.map((anime) => {
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
              className="flex items-end h-[480px] rounded-sm w-full bg-cover"
              style={{
                backgroundImage: `url(${anime.bannerImage})`,
              }}
            >
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <div></div>
                  <span>{title}</span>
                  <span>{description}</span>
                </div>
                <div className="flex gap-2">
                  <span>BUTTON 1</span>
                  <span>BUTTON 1</span>
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
