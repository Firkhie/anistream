export default async function getAnimeDetailById({ id }: { id: string }) {
  const host = process.env.NODE_ENV === "production" ? "" : process.env.NEXT_PUBLIC_APP_HOST;

  const res = await fetch(`${host}/api/anime/detail?id=${id}`, {
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  return res;
}
