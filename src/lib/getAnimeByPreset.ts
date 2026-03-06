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
  const res = await fetch(`/api/anime/${preset}?page=${page}&perPage=${perPage}`, {
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  return res;
}
