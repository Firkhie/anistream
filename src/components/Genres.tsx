import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { GENRES } from "@/constants/genres";

export default function Genres() {
  return (
    <Carousel className="px-11">
      {/* Content */}
      <CarouselContent className="gap-2">
        {GENRES.map((item) => (
          <CarouselItem
            key={item}
            className="rounded-sm py-2 px-7 text-xs bg-secondary/75"
            noBasis={true}
          >
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Buttons */}
      <CarouselPrevious placement="side" variant={"default"} />
      <CarouselNext placement="side" variant={"default"} />
    </Carousel>
  );
}
