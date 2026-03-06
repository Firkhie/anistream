export default async function getAnimeBaseById({ id }: { id: string }) {
  const res = await fetch(`/api/anime/base?id=${id}`, {
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  return res;
}
