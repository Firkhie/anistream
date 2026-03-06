export default async function getAnimeCharactersById({ id }: { id: string }) {
  const res = await fetch(`/api/anime/characters?id=${id}`, {
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  return res;
}
