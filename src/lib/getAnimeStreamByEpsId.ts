export default async function getAnimeStreamByEpsId({
  epsId,
  server,
  type,
}: {
  epsId: string;
  server: string;
  type: string;
}) {
  const host = process.env.NODE_ENV === "production" ? "" : process.env.NEXT_PUBLIC_APP_HOST;

  const res = await fetch(
    `${host}/api/anime/episode/stream?id=${epsId}&server=${server}&type=${type}`,
    {
      next: { revalidate: 86400 },
    },
  ).then((res) => res.json());

  return res;
}
