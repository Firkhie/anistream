export type AnimeDetail = AnimeBasic & {
  startDate: FuzzyDate | null;
  endDate: FuzzyDate | null;
  duration: number | null;
  countryOfOrigin: string | null;
  isLicensed: boolean | null;
  trailer: MediaTrailer | null;
  synonyms: string[] | null;
  isAdult: boolean | null;
  popularity: number | null;
  source: MediaSource | null;
  studios: string[] | null;
  relations: (AnimeBasic & { relationType: MediaRelation })[] | null;
  characters: Character[] | null;
  recommendations: AnimeBasic[] | null;
};

export type AnimeBasic = {
  id: number;
  idMal: number | null;
  title: MediaTitle | null;
  format: MediaFormat | null;
  status: MediaStatus | null;
  description: string | null;
  season: MediaSeason | null;
  year: number | null;
  totalEpisodes: number | null;
  currentEpisode: number | null;
  color: string | null;
  coverImage: string | null;
  bannerImage: string | null;
  genres: GenreCollection[] | null;
  rating: number | null;
  nextAiringEpisode: AiringSchedule | null;
};

export type MediaVariables = {
  page: number;
  perPage: number;
  season?: MediaSeason;
  seasonYear?: number;
  type?: MediaType;
  format?: MediaFormat;
  status?: MediaStatus;
  isAdult?: boolean;
  search?: string;
  formatIn?: MediaFormat[];
  statusIn?: MediaStatus[];
  genreIn?: GenreCollection[];
  averageScoreGreater?: number;
  averageScoreLesser?: number;
  sort?: MediaSort[];
};

export type MediaTitle = {
  romaji: string | null;
  english: string | null;
  native: string | null;
  userPreferred: string | null;
};

export type MediaTrailer = {
  id: string | null;
  site: string | null;
  thumbnail: string | null;
};

export type MediaCoverImage = {
  extraLarge: string | null;
  large: string | null;
  medium: string | null;
  color: string | null;
};

export type FuzzyDate = {
  year: number | null;
  month: number | null;
  day: number | null;
};

export type AiringSchedule = {
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
};

export type Character = {
  id: string;
  role: CharacterRole | null;
  name: CharacterName | null;
  image: string | null;
  voiceActors: Staff[] | null;
};

export type Staff = {
  id: string;
  name: StaffName | null;
  image: string | null;
  language: StaffLanguage | StaffLanguageV2;
};

export type CharacterName = {
  first: string | null;
  last: string | null;
  full: string | null;
  userPreferred: string | null;
};

export type StaffName = {
  first: string | null;
  last: string | null;
  full: string | null;
  userPreferred: string | null;
};

export type SearchResponse = {
  currentPage: number | null;
  hasNextPage: boolean | null;
  results: AnimeBasic[];
};

export type MediaFormat =
  | "TV"
  | "TV_SHORT"
  | "MOVIE"
  | "SPECIAL"
  | "OVA"
  | "ONA"
  | "MUSIC"
  | "MANGA"
  | "NOVEL"
  | "ONE_SHOT";

export type MediaSort =
  | "ID"
  | "ID_DESC"
  | "TITLE_ROMAJI"
  | "TITLE_ROMAJI_DESC"
  | "TITLE_ENGLISH"
  | "TITLE_ENGLISH_DESC"
  | "TITLE_NATIVE"
  | "TITLE_NATIVE_DESC"
  | "TYPE"
  | "TYPE_DESC"
  | "FORMAT"
  | "FORMAT_DESC"
  | "START_DATE"
  | "START_DATE_DESC"
  | "END_DATE"
  | "END_DATE_DESC"
  | "SCORE"
  | "SCORE_DESC"
  | "POPULARITY"
  | "POPULARITY_DESC"
  | "TRENDING"
  | "TRENDING_DESC"
  | "EPISODES"
  | "EPISODES_DESC"
  | "DURATION"
  | "DURATION_DESC"
  | "STATUS"
  | "STATUS_DESC"
  | "CHAPTERS"
  | "CHAPTERS_DESC"
  | "VOLUMES"
  | "VOLUMES_DESC"
  | "UPDATED_AT"
  | "UPDATED_AT_DESC"
  | "SEARCH_MATCH"
  | "FAVOURITES"
  | "FAVOURITES_DESC";

export type MediaType = "ANIME" | "MANGA";

export type MediaStatus = "FINISHED" | "RELEASING" | "NOT_YET_RELEASED" | "CANCELLED" | "HIATUS";

export type MediaSeason = "WINTER" | "SPRING" | "SUMMER" | "FALL";

export type MediaRelation =
  | "ADAPTION"
  | "PREQUEL"
  | "SEQUEL"
  | "PARENT"
  | "SIDE_STORY"
  | "CHARACTER"
  | "SUMMARY"
  | "ALTERNATIVE"
  | "SPIN_OFF"
  | "OTHER"
  | "SOURCE"
  | "COMPILATION"
  | "CONTAINS";

export type MediaSource =
  | "ORIGINAL"
  | "MANGA"
  | "LIGHT_NOVEL"
  | "VISUAL_NOVEL"
  | "VIDEO_GAME"
  | "OTHER"
  | "NOVEL"
  | "DOUJINSHI"
  | "ANIME"
  | "WEB_NOVEL"
  | "LIVE_ACTION";

export type GenreCollection =
  | "Action"
  | "Adventure"
  | "Comedy"
  | "Drama"
  | "Ecchi"
  | "Fantasy"
  | "Hentai"
  | "Horror"
  | "Mahou Shoujo"
  | "Mecha"
  | "Music"
  | "Mystery"
  | "Psychological"
  | "Romance"
  | "Sci-Fi"
  | "Slice of Life"
  | "Sports"
  | "Supernatural"
  | "Thriller";

export type StaffLanguage =
  | "JAPANESE"
  | "ENGLISH"
  | "KOREAN"
  | "ITALIAN"
  | "SPANISH"
  | "PORTUGUESE"
  | "FRENCH"
  | "GERMAN"
  | "HEBREW"
  | "HUNGARIAN";

export type StaffLanguageV2 =
  | StaffLanguage
  | "CHINESE"
  | "ARABIC"
  | "FILIPINO"
  | "CATALAN"
  | "FINNISH"
  | "TURKISH"
  | "DUTCH"
  | "SWEDISH"
  | "THAI"
  | "TAGALOG"
  | "MALAYSIAN"
  | "INDONESIAN"
  | "VIETNAMESE"
  | "NEPALI"
  | "HINDI"
  | "URDU";

export type CharacterRole = "MAIN" | "SUPPORTING" | "BACKGROUND";
