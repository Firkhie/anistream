import getAnimeDetailById from "@/lib/getAnimeDetailById";
import { formatPlainDate } from "@/lib/utils";
import { AnimeDetail } from "@/types";
import parse from "html-react-parser";
import InfoActions from "./InfoActions";
import GenreBadge from "../GenreBadges";

export default async function InfoSection({ animeId }: { animeId: string }) {
  const data: AnimeDetail = await getAnimeDetailById({ id: animeId });
  if (!data) return <div>404</div>;

  const title =
    data?.title?.userPreferred ||
    data?.title?.romaji ||
    data?.title?.english ||
    data?.title?.native ||
    "Untitled";

  const nativeTitle = data.title?.native ?? "-";
  const description = data.description ?? "No description found.";
  const aniColor = data.color ?? "#ffffff";

  return (
    <div className="flex gap-3 rounded-sm border p-3">
      {/* Left Side */}
      <InfoActions
        animeId={data.id}
        malId={data.idMal ?? 0}
        trailer={data.trailer}
        coverImage={data.coverImage ?? "/assets/not-found.png"}
        title={title}
      />
      {/* Right Side */}
      <div className="flex flex-col gap-3 overflow-hidden text-sm sm:gap-4">
        <div className="flex flex-col gap-1.5">
          <h2 className="line-clamp-2 text-lg font-bold">{title}</h2>
          <h3 className="ine-clamp-1" style={{ color: aniColor }}>
            {nativeTitle}
          </h3>
          {data.genres && data.genres.length > 0 && (
            <div className="scrollbar-hidden mt-1 flex flex-nowrap gap-1.5 overflow-x-scroll">
              {data.genres.map((genre) => (
                <GenreBadge key={genre} genre={genre} color={aniColor} />
              ))}
            </div>
          )}
        </div>

        <div className="text-muted-foreground/85 line-clamp-4">{parse(description)}</div>

        <div className="hidden grid-cols-1 gap-x-12 gap-y-2 sm:grid md:grid-cols-2">
          <InfoItem label="Status" value={data.status ?? "-"} />
          <InfoItem label="Format" value={data.format ?? "-"} />
          <InfoItem label="Total Episodes" value={data.totalEpisodes ?? "-"} />
          <InfoItem label="Current Episode" value={data.currentEpisode ?? "-"} />
          <InfoItem label="Season" value={data.season ?? "-"} />
          <InfoItem label="Rating" value={data.rating ?? "-"} />
          <InfoItem
            label="Start Date"
            value={data.startDate ? formatPlainDate(data.startDate) : "-"}
          />
          <InfoItem label="End Date" value={data.endDate ? formatPlainDate(data.endDate) : "-"} />
          <InfoItem label="Country" value={data.countryOfOrigin ?? "-"} />
          <InfoItem label="Adult" value={data.isAdult ? "Yes" : "No"} />
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string | number }) {
  return (
    <p className="text-foreground/60">
      {label}: <span className="text-foreground font-semibold">{value}</span>
    </p>
  );
}
