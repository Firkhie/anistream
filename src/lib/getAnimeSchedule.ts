import { parse } from "date-fns";
import { formatUnixDate } from "./utils";

export default async function getAnimeSchedule() {
  const filters = {
    days: "4",
    perPage: "50",
    page: "1",
  };

  const params = new URLSearchParams(filters).toString();
  const host = process.env.NODE_ENV === "production" ? "" : process.env.NEXT_PUBLIC_APP_HOST;

  const res = await fetch(`${host}/api/anime/airing?${params}`).then((res) => res.json());

  const grouped: Record<string, typeof res.results> = {};
  res.results.forEach((item: any) => {
    if (!item.nextAiringEpisode?.airingAt) return;

    const date = formatUnixDate(item.nextAiringEpisode.airingAt);

    if (!grouped[date]) {
      grouped[date] = [];
    }

    grouped[date].push(item);
  });

  const groupedResults = [];
  for (const [key, value] of Object.entries(grouped)) {
    groupedResults.push({
      date: key,
      items: value,
    });
  }

  groupedResults.sort((a, b) => {
    const dateA = parse(a.date, "EEEE, d MMM yyyy", new Date());
    const dateB = parse(b.date, "EEEE, d MMM yyyy", new Date());
    return dateA.getTime() - dateB.getTime();
  });

  return {
    ...res,
    results: groupedResults,
  };
}
