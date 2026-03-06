export default async function getAnimeDetailById({ id }: { id: string }) {
  const res = await fetch(`/api/anime/detail?id=${id}`, {
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  return res;
}
