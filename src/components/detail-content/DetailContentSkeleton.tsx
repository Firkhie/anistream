import { Skeleton } from "../ui/Skeleton";

export default function DetailContentSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      {/* Hero */}
      <Skeleton className="h-[200px] w-full rounded-sm md:h-[250px] lg:h-[300px]" />
      <div className="flex flex-row gap-5 px-2 md:gap-2 md:px-5">
        {/* Image */}
        <div className="relative -top-24 flex h-fit shrink-0 gap-2 lg:w-52 lg:flex-col">
          <div className="w-40 shrink-0 lg:w-52">
            <div className="relative aspect-2/3">
              <Skeleton className="h-full rounded-r-none" />
            </div>
          </div>
        </div>
        {/* Meta */}
        <div className="flex w-full flex-col gap-3 md:pl-3">
          <Skeleton className="h-8 w-full" />
          <div className="hidden gap-1.5 lg:flex">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="hidden flex-col gap-3 lg:flex">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="flex flex-row gap-2 lg:hidden">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full max-w-12 sm:w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
