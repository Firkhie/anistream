export default async function getAnimeCharactersById({ id }: { id: string }) {
  const host = process.env.NODE_ENV === "production" ? "" : process.env.NEXT_PUBLIC_APP_HOST;

  const cacheKey = `anime-characters-by-id-${id}`;

  if (typeof window !== "undefined") {
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) return JSON.parse(cachedData);
  }

  const res = await fetch(`${host}/api/anime/characters?id=${id}`).then((res) => res.json());

  if (typeof window !== "undefined") {
    sessionStorage.setItem(cacheKey, JSON.stringify(res));
  }

  return res;
}
