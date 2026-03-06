export default async function getAnimeEpisodesById({ id }: { id: string }) {
  const res = await fetch(`/api/anime/episodes?id=${id}`, {
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  return res;
}
