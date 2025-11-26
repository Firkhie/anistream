import {
  MediaFormat,
  MediaType,
  MediaStatus,
  MediaSeason,
  MediaSource,
  MediaRelation,
  MediaSort,
} from "@/types";

export const MEDIA_FORMATS = [
  { value: "TV", label: "TV" },
  { value: "TV_SHORT", label: "TV Short" },
  { value: "MOVIE", label: "Movie" },
  { value: "SPECIAL", label: "Special" },
  { value: "OVA", label: "OVA" },
  { value: "ONA", label: "ONA" },
  { value: "MUSIC", label: "Music" },
  { value: "MANGA", label: "Manga" },
  { value: "NOVEL", label: "Novel" },
  { value: "ONE_SHOT", label: "One Shot" },
];

export const MEDIA_TYPES = [
  { value: "ANIME", label: "Anime" },
  { value: "MANGA", label: "Manga" },
];

export const MEDIA_STATUSES = [
  { value: "FINISHED", label: "Finished" },
  { value: "RELEASING", label: "Releasing" },
  { value: "NOT_YET_RELEASED", label: "Not Yet Released" },
  { value: "CANCELLED", label: "Cancelled" },
  { value: "HIATUS", label: "Hiatus" },
];

export const MEDIA_STATUSES_COLOR = {
  FINISHED: "#22c55e",
  RELEASING: "#3b82f6",
  NOT_YET_RELEASED: "#6b7280",
  CANCELLED: "#ef4444",
  HIATUS: "#f97316",
};

export const MEDIA_SEASONS = [
  { value: "WINTER", label: "Winter" },
  { value: "SPRING", label: "Spring" },
  { value: "SUMMER", label: "Summer" },
  { value: "FALL", label: "Fall" },
];

export const MEDIA_SOURCES = [
  { value: "ORIGINAL", label: "Original" },
  { value: "MANGA", label: "Manga" },
  { value: "LIGHT_NOVEL", label: "Light Novel" },
  { value: "VISUAL_NOVEL", label: "Visual Novel" },
  { value: "VIDEO_GAME", label: "Video Game" },
  { value: "OTHER", label: "Other" },
  { value: "NOVEL", label: "Novel" },
  { value: "DOUJINSHI", label: "Doujinshi" },
  { value: "ANIME", label: "Anime" },
  { value: "WEB_NOVEL", label: "Web Novel" },
  { value: "LIVE_ACTION", label: "Live Action" },
];

export const MEDIA_RELATIONS = [
  { value: "ADAPTION", label: "Adaption" },
  { value: "PREQUEL", label: "Prequel" },
  { value: "SEQUEL", label: "Sequel" },
  { value: "PARENT", label: "Parent" },
  { value: "SIDE_STORY", label: "Side Story" },
  { value: "CHARACTER", label: "Character" },
  { value: "SUMMARY", label: "Summary" },
  { value: "ALTERNATIVE", label: "Alternative" },
  { value: "SPIN_OFF", label: "Spin Off" },
  { value: "OTHER", label: "Other" },
  { value: "SOURCE", label: "Source" },
  { value: "COMPILATION", label: "Compilation" },
  { value: "CONTAINS", label: "Contains" },
];

export const MEDIA_SORT = [
  { value: "ID", label: "ID" },
  { value: "ID_DESC", label: "ID Desc" },
  { value: "TITLE_ROMAJI", label: "Title Romaji" },
  { value: "TITLE_ROMAJI_DESC", label: "Title Romaji Desc" },
  { value: "TITLE_ENGLISH", label: "Title English" },
  { value: "TITLE_ENGLISH_DESC", label: "Title English Desc" },
  { value: "TITLE_NATIVE", label: "Title Native" },
  { value: "TITLE_NATIVE_DESC", label: "Title Native Desc" },
  { value: "TYPE", label: "Type" },
  { value: "TYPE_DESC", label: "Type Desc" },
  { value: "FORMAT", label: "Format" },
  { value: "FORMAT_DESC", label: "Format Desc" },
  { value: "START_DATE", label: "Start Date" },
  { value: "START_DATE_DESC", label: "Start Date Desc" },
  { value: "END_DATE", label: "End Date" },
  { value: "END_DATE_DESC", label: "End Date Desc" },
  { value: "SCORE", label: "Score" },
  { value: "SCORE_DESC", label: "Score Desc" },
  { value: "POPULARITY", label: "Popularity" },
  { value: "POPULARITY_DESC", label: "Popularity Desc" },
  { value: "TRENDING", label: "Trending" },
  { value: "TRENDING_DESC", label: "Trending Desc" },
  { value: "EPISODES", label: "Episodes" },
  { value: "EPISODES_DESC", label: "Episodes Desc" },
  { value: "DURATION", label: "Duration" },
  { value: "DURATION_DESC", label: "Duration Desc" },
  { value: "STATUS", label: "Status" },
  { value: "STATUS_DESC", label: "Status Desc" },
  { value: "CHAPTERS", label: "Chapters" },
  { value: "CHAPTERS_DESC", label: "Chapters Desc" },
  { value: "VOLUMES", label: "Volumes" },
  { value: "VOLUMES_DESC", label: "Volumes Desc" },
  { value: "UPDATED_AT", label: "Updated At" },
  { value: "UPDATED_AT_DESC", label: "Updated At Desc" },
  { value: "SEARCH_MATCH", label: "Search Match" },
  { value: "FAVOURITES", label: "Favourites" },
  { value: "FAVOURITES_DESC", label: "Favourites Desc" },
];
