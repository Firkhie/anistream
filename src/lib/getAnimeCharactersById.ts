export default async function getAnimeCharactersById({ id }: { id: string }) {
  const host =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_URL
      : process.env.NEXT_PUBLIC_APP_HOST;

  const res = await fetch(`${host}/api/anime/characters?id=${id}`, {
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  return res;
}
