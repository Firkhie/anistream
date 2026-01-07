import { Skeleton } from "./ui/Skeleton";

export default function HeroSkeleton() {
  return (
    <div className="bg-secondary/25 relative flex h-[350px] w-full items-end rounded-sm lg:h-[480px]">
      <div className="relative z-10 flex w-full flex-col gap-4 p-5 lg:flex-row lg:gap-0">
        {/* Badges, Title, & Description */}
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex gap-1">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
        </div>
        {/* Buttons */}
        <div className="flex flex-1 items-end gap-2 lg:justify-end">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
      {/* Carousel Buttons */}
      <div className="absolute top-5 right-5">
        <div className="flex gap-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
}
