export type Preset = "newest" | "popular" | "trending" | "upcoming";

export type getAnimeByPresetParams = {
  preset: Preset;
  page?: number;
  perPage?: number;
};

export default async function getAnimeByPreset({
  preset,
  page = 1,
  perPage = 20,
}: getAnimeByPresetParams) {
  const host = process.env.NODE_ENV === "production" ? "" : process.env.NEXT_PUBLIC_APP_HOST;

  const res = await fetch(`${host}/api/anime/${preset}?page=${page}&perPage=${perPage}`).then(
    (res) => res.json()
  );

  return res;
}
