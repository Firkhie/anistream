import { currentYear } from "@/constants/years";

export default async function getAnimeBySeason({
  season,
}: {
  season: "winter" | "spring" | "summer" | "fall";
}) {
  const filters = {
    perPage: "20",
    page: "1",
    year: String(currentYear),
    season: season.toUpperCase(),
    sort: "TRENDING_DESC,SCORE_DESC,POPULARITY_DESC",
  };

  const params = new URLSearchParams(filters).toString();
  const host = process.env.NODE_ENV === "production" ? "" : process.env.NEXT_PUBLIC_APP_HOST;

  const res = await fetch(`${host}/api/anime/search?${params}`, {
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  return res;
}
