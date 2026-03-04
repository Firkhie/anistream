export default async function getAnimeServersByEpsId({ epsId }: { epsId: string }) {
  const host = process.env.NODE_ENV === "production" ? "" : process.env.NEXT_PUBLIC_APP_HOST;

  const res = await fetch(`${host}/api/anime/episode/servers?id=${epsId}`, {
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  return res;
}
