export default async function getAnimeEpisodesById({ id }: { id: string }) {
  const host =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_URL
      : process.env.NEXT_PUBLIC_APP_HOST;

  const res = await fetch(`${host}/api/anime/episodes?id=${id}`, {
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  return res;
}
