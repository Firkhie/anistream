export default async function getAnimeByParams({ filters }: { filters: Record<string, string> }) {
  const params = new URLSearchParams(filters).toString();

  const res = await fetch(`/api/anime/search?${params}`, {
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  return res;
}
