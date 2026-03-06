export default async function getAnimeStreamByEpsId({
  epsId,
  server,
  type,
  source,
}: {
  epsId: string;
  server?: string;
  type?: string;
  source: "hianime" | "yumaapi";
}) {
  const res = await fetch(
    `/api/anime/episode/stream?id=${epsId}&server=${server}&type=${type}&source=${source}`,
    {
      next: { revalidate: 86400 },
    },
  ).then((res) => res.json());

  return res;
}
