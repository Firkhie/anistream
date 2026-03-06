export default async function getAnimeServersByEpsId({ epsId }: { epsId: string }) {
  const res = await fetch(`/api/anime/episode/servers?id=${epsId}`, {
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  return res;
}
