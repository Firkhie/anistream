import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { GENRES } from "@/constants/genres";

export default function Genres() {
  // TODO: Fix overlapped container between 'Content' and 'Buttons'
  return (
    <Carousel>
      {/* Content */}
      <CarouselContent className="gap-2">
        {GENRES.map((item) => (
          <CarouselItem key={item} className="rounded-sm border-2 py-2 px-7 text-xs" noBasis={true}>
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Buttons */}
      <CarouselPrevious placement="side" />
      <CarouselNext placement="side" />
    </Carousel>
  );
}
