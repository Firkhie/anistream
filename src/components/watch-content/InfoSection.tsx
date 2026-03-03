import getAnimeDetailById from "@/lib/getAnimeDetailById";
import { formatPlainDate } from "@/lib/utils";
import { AnimeDetail } from "@/types";
import parse from "html-react-parser";
import Image from "next/image";
import { Button } from "../ui/Button";
import { NotebookPen, Play } from "lucide-react";
import AnimeButton from "../anime/AnimeButton";
import InfoActions from "./InfoActions";

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
  const textColor = data.color ?? "#ffffff";

  return (
    <div className="flex gap-3 rounded-sm border p-3">
      {/* Left Side */}
      <InfoActions
        animeId={data.id}
        malId={data.idMal}
        trailer={data.trailer}
        coverImage={data.coverImage}
        title={title}
      />
      {/* Right Side */}
      <div className="flex flex-col gap-3 text-sm">
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <h3 style={{ color: textColor }}>{nativeTitle}</h3>
        </div>

        <div>{parse(description)}</div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-2">
          <InfoItem label="Status" value={data.status} />
          <InfoItem label="Format" value={data.format} />
          <InfoItem label="Total Episodes" value={data.totalEpisodes} />
          <InfoItem label="Current Episode" value={data.currentEpisode} />
          <InfoItem label="Season" value={data.season} />
          <InfoItem label="Rating" value={data.rating} />
          <InfoItem
            label="Start Date"
            value={data.startDate ? formatPlainDate(data.startDate) : undefined}
          />
          <InfoItem
            label="End Date"
            value={data.endDate ? formatPlainDate(data.endDate) : undefined}
          />
          <InfoItem label="Country" value={data.countryOfOrigin} />
          <InfoItem label="Adult" value={data.isAdult ? "Yes" : "No"} />
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value?: string | number }) {
  return (
    <p className="text-foreground/60">
      {label}: <span className="text-foreground font-semibold">{value ?? "N/A"}</span>
    </p>
  );
}
