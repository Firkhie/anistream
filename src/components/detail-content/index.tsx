"use client";

import useAnimeDetailById from "@/hooks/useAnimeDetailById";
import Image from "next/image";
import { Button } from "../ui/Button";
import { LucideIcon, Monitor, NotebookPen, Play, Star } from "lucide-react";
import AnimeButton from "../anime/AnimeButton";
import { cn, formatPlainDate, sanitizeHtmlString } from "@/lib/utils";
import { Badge } from "../ui/Badge";
import parse from "html-react-parser";
import { useState } from "react";
import OverviewContent from "./OverviewContent";
import WatchContent from "./WatchContent";
import CharactersContent from "./CharactersContent";
import AnimeCardCarousel from "../anime/AnimeCardCarousel";

type DetailPreset = "overview" | "watch" | "characters";

const containerBadges: {
  key: "status" | "year" | "format" | "rating";
  icon?: LucideIcon;
}[] = [
  { key: "status" },
  { key: "year" },
  { key: "format", icon: Monitor },
  { key: "rating", icon: Star },
];

export default function DetailContent({ slug }: { slug: string }) {
  const { data, loading } = useAnimeDetailById({ id: slug });
  const [preset, setPreset] = useState<DetailPreset>("overview");

  const title =
    data?.title?.userPreferred ||
    data?.title?.romaji ||
    data?.title?.english ||
    data?.title?.native ||
    "Untitled";

  const description = data?.description || "No description found.";

  const handlePreset = (preset: DetailPreset) => {
    setPreset(preset);
  };

  return (
    <>
      {loading && data ? (
        <>Loading ...</>
      ) : (
        <div>
          {/* Hero */}
          <div
            className="h-[200px] w-full rounded-sm bg-cover bg-center lg:h-[300px]"
            style={{
              backgroundImage: `url(${data?.bannerImage})`,
            }}
          ></div>
          {/* Content */}
          <div className="flex flex-row gap-5 p-5">
            {/* Sidebar Info */}
            <div className="relative -top-24 flex min-w-56 flex-col gap-2">
              {/* Cover */}
              <div className="relative aspect-2/3">
                <Image
                  src={data?.coverImage ?? "/assets/not-found.png"}
                  alt="OK"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fill
                  className="rounded-sm"
                />
              </div>

              {/* Buttonss */}
              <Button size={"lg"} variant={"secondary"}>
                <Play />
                Watch Now
              </Button>
              <Button size={"lg"} variant={"secondary"}>
                <NotebookPen />
                Add To List
              </Button>
              <div className="flex gap-2">
                <AnimeButton size="large" icon="anilist" />
                <AnimeButton size="large" icon="mal" />
              </div>

              {/* Meta Info */}
              <div className="bg-secondary flex flex-col gap-2 rounded-sm p-3 text-sm">
                {data?.status && (
                  <>
                    <span className="font-bold">Status</span>
                    <span className="font-extralight">{data.status}</span>
                  </>
                )}
                {data?.startDate && (
                  <>
                    <span className="font-bold">Start Date</span>
                    <span className="font-extralight">{formatPlainDate(data.startDate)}</span>
                  </>
                )}
                {data?.endDate && (
                  <>
                    <span className="font-bold">End Date</span>
                    <span className="font-extralight">{formatPlainDate(data.endDate)}</span>
                  </>
                )}
                {data?.format && (
                  <>
                    <span className="font-bold">Format</span>
                    <span className="font-extralight">{data.format}</span>
                  </>
                )}
                {data?.season && (
                  <>
                    <span className="font-bold">Season</span>
                    <span className="font-extralight">{data.season}</span>
                  </>
                )}
                {data?.totalEpisodes && (
                  <>
                    <span className="font-bold">Total Episodes</span>
                    <span className="font-extralight">{data.totalEpisodes}</span>
                  </>
                )}
                {data?.currentEpisode && (
                  <>
                    <span className="font-bold">Current Episode</span>
                    <span className="font-extralight">{data.currentEpisode}</span>
                  </>
                )}
                {data?.countryOfOrigin && (
                  <>
                    <span className="font-bold">Country</span>
                    <span className="font-extralight">{data.countryOfOrigin}</span>
                  </>
                )}
                {data?.genres && data.genres.length > 0 && (
                  <>
                    <span className="font-bold">Genres</span>
                    <div className="flex flex-wrap gap-1">
                      {data.genres.map((genre) => (
                        <Badge key={genre} className="bg-primary rounded-sm">
                          {genre}
                        </Badge>
                      ))}
                    </div>
                  </>
                )}
                {data?.studios && data.studios.length > 0 && (
                  <>
                    <span className="font-bold">Studios</span>
                    {data.studios.map((studio) => (
                      <span className="font-extralight">{studio}</span>
                    ))}
                  </>
                )}
              </div>
            </div>
            {/* Main */}
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">{title}</h2>
              <div className="flex gap-1">
                {data &&
                  containerBadges.map(({ icon: Icon, key }) => {
                    const value = data[key];
                    if (!value) return;

                    return (
                      <Badge key={key} icon={Icon} className="rounded-sm">
                        {value}
                      </Badge>
                    );
                  })}
              </div>
              <p className="text-sm">{parse(sanitizeHtmlString(description))}</p>
              <div className="flex w-fit items-center gap-6 rounded-sm border px-4 py-2">
                {(["overview", "watch", "characters"] as DetailPreset[]).map((item) => (
                  <div
                    key={item}
                    className={cn(
                      "hover:text-primary rounded-sm text-sm uppercase",
                      preset === item ? "text-primary" : "",
                    )}
                    onClick={() => handlePreset(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="bg-secondary flex flex-col gap-2 rounded-sm p-3">
                {preset === "overview" && <OverviewContent data={data} />}
                {preset === "watch" && <WatchContent />}
                {preset === "characters" && <CharactersContent />}
              </div>
            </div>
          </div>
          <AnimeCardCarousel results={data?.recommendations} sectionType="recommendations" />
        </div>
      )}
    </>
  );
}
