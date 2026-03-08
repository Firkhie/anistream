import { ScheduleResponse } from "@/types";
import getAnimeSchedule from "@/lib/getAnimeSchedule";
import AnimeScheduleCard from "./anime/AnimeScheduleCard";

export default async function ScheduleLoader() {
  const data: ScheduleResponse = await getAnimeSchedule();

  if (data.results.length < 1) return <div>Anime not found.</div>;
  return (
    <div className="flex flex-col gap-6">
      {data.results.map((group) => (
        <div key={group.date} className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">{group.date}</h2>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {group.items.map((item, index) => (
              <AnimeScheduleCard key={`${item.id}-${index}`} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
