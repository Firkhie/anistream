"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { GENRES } from "@/constants/genres";
import { currentYear } from "@/constants/years";
import { useRouter } from "next/navigation";

export default function Genres() {
  const router = useRouter();
  const handleGenre = (genre: string) => {
    const filters = {
      year: String(currentYear),
      sort: "POPULARITY_DESC",
      genres: genre,
    };

    const params = new URLSearchParams(filters).toString();
    router.push(`search?${params.toString()}`);
  };
  return (
    <Carousel className="px-11">
      {/* Content */}
      <CarouselContent className="gap-2">
        {GENRES.map((item) => (
          <CarouselItem
            key={item.label}
            className="bg-secondary/75 hover:bg-primary/15 cursor-pointer rounded-sm px-7 py-2 text-xs"
            noBasis={true}
            onClick={() => handleGenre(item.value)}
          >
            {item.value}
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Buttons */}
      <CarouselPrevious placement="side" variant={"default"} />
      <CarouselNext placement="side" variant={"default"} />
    </Carousel>
  );
}
