export default async function getAnimeByParams({ filters }: { filters: Record<string, string> }) {
  const params = new URLSearchParams(filters).toString();
  const host = process.env.NODE_ENV === "production" ? "" : process.env.NEXT_PUBLIC_APP_HOST;

  const res = await fetch(`${host}/api/anime/search?${params}`, {
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  return res;
}
