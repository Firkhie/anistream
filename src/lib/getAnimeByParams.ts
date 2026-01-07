export default async function getAnimeByParams({ filters }: { filters: Record<string, string> }) {
  const params = new URLSearchParams(filters).toString();
  const host = process.env.NODE_ENV === "production" ? "" : process.env.NEXT_PUBLIC_APP_HOST;

  const cacheKey = `anime-by-params-${params}`;

  if (typeof window !== "undefined") {
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) return JSON.parse(cachedData);
  }

  const res = await fetch(`${host}/api/anime/search?${params}`).then((res) => res.json());

  if (typeof window !== "undefined") {
    sessionStorage.setItem(cacheKey, JSON.stringify(res));
  }

  return res;
}
