import { cn, formatPlainDate } from "@/lib/utils";
import { AnimeDetail } from "@/types";
import parse from "html-react-parser";
import GenreBadge from "../GenreBadges";

export type MetaDetailView = "desktop" | "mobile";

const layoutClass: Record<MetaDetailView, string> = {
  desktop: "hidden flex-col gap-2 lg:flex",
  mobile: "-mt-24 flex flex-row gap-10 overflow-x-scroll  lg:hidden",
};

export default function MetaDetail({ data, view }: { data: AnimeDetail; view: MetaDetailView }) {
  const description = data?.description || "No description found.";
  const aniColor = data.color || "white";

  return (
    <div className="flex flex-col gap-2">
      <div className={cn("bg-secondary/50 rounded-sm p-3 text-sm", layoutClass[view])}>
        {data.status && (
          <div className="flex shrink-0 flex-col gap-1">
            <span className="font-bold">Status</span>
            <span className="font-extralight">{data.status}</span>
          </div>
        )}
        {data.startDate && (
          <div className="flex shrink-0 flex-col gap-1">
            <span className="font-bold">Start Date</span>
            <span className="font-extralight">{formatPlainDate(data.startDate)}</span>
          </div>
        )}
        {data.endDate && (
          <div className="flex shrink-0 flex-col gap-1">
            <span className="font-bold">End Date</span>
            <span className="font-extralight">{formatPlainDate(data.endDate)}</span>
          </div>
        )}
        {data.format && (
          <div className="flex shrink-0 flex-col gap-1">
            <span className="font-bold">Format</span>
            <span className="font-extralight">{data.format}</span>
          </div>
        )}
        {data.season && (
          <div className="flex shrink-0 flex-col gap-1">
            <span className="font-bold">Season</span>
            <span className="font-extralight">{data.season}</span>
          </div>
        )}
        {data.totalEpisodes && (
          <div className="flex shrink-0 flex-col gap-1">
            <span className="font-bold">Total Episodes</span>
            <span className="font-extralight">{data.totalEpisodes}</span>
          </div>
        )}
        {data.currentEpisode && (
          <div className="flex shrink-0 flex-col gap-1">
            <span className="font-bold">Current Episode</span>
            <span className="font-extralight">{data.currentEpisode}</span>
          </div>
        )}
        {data.countryOfOrigin && (
          <div className="flex shrink-0 flex-col gap-1">
            <span className="font-bold">Country</span>
            <span className="font-extralight">{data.countryOfOrigin}</span>
          </div>
        )}

        {data.genres && data.genres.length > 0 && (
          <div className="flex shrink-0 flex-col gap-1">
            <span className="font-bold">Genres</span>
            <div className="flex shrink-0 flex-wrap gap-1">
              {data.genres.map((genre) => (
                <GenreBadge key={genre} genre={genre} color={aniColor} />
              ))}
            </div>
          </div>
        )}
        {data.studios && data.studios.length > 0 && (
          <div className="flex shrink-0 flex-col gap-1">
            <span className="font-bold">Studios</span>
            <div className="flex shrink-0 flex-wrap gap-1">
              {data.studios.map((studio) => (
                <span key={studio} className="font-extralight">
                  {studio}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      {view === "mobile" && (
        <div className="bg-secondary/50 mt-2 flex flex-col gap-4 rounded-sm p-3 text-sm lg:hidden">
          <span className="font-bold">Description</span>
          <p className="text-foreground/75 h-fit max-h-[140px] overflow-y-auto">
            {parse(description)}
          </p>
        </div>
      )}
    </div>
  );
}
