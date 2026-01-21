export default async function getAnilistId() {
  const url = process.env.NEXT_PUBLIC_ANILIST_IDS_URL;
  if (!url) return null;

  const res = await fetch(url);
  const text = await res.text();

  const ids = text.trim().split("\n");
  const randomIndex = Math.floor(Math.random() * ids.length);

  return ids[randomIndex];
}
