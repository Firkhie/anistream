import {
  MediaFormat,
  MediaType,
  MediaStatus,
  MediaSeason,
  MediaSource,
  MediaRelation,
} from "@/types";

export const MEDIA_FORMATS: MediaFormat[] = [
  "TV",
  "TV_SHORT",
  "MOVIE",
  "SPECIAL",
  "OVA",
  "ONA",
  "MUSIC",
  "MANGA",
  "NOVEL",
  "ONE_SHOT",
];

export const MEDIA_TYPES: MediaType[] = ["ANIME", "MANGA"];

export const MEDIA_STATUSES: MediaStatus[] = [
  "FINISHED",
  "RELEASING",
  "NOT_YET_RELEASED",
  "CANCELLED",
  "HIATUS",
];

export const MEDIA_STATUSES_COLOR: Record<MediaStatus, string> = {
  FINISHED: "#22c55e",
  RELEASING: "#3b82f6",
  NOT_YET_RELEASED: "#6b7280",
  CANCELLED: "#ef4444",
  HIATUS: "#f97316",
};

export const MEDIA_SEASONS: MediaSeason[] = ["WINTER", "SPRING", "SUMMER", "FALL"];

export const MEDIA_SOURCES: MediaSource[] = [
  "ORIGINAL",
  "MANGA",
  "LIGHT_NOVEL",
  "VISUAL_NOVEL",
  "VIDEO_GAME",
  "OTHER",
  "NOVEL",
  "DOUJINSHI",
  "ANIME",
  "WEB_NOVEL",
  "LIVE_ACTION",
];

export const MEDIA_RELATIONS: MediaRelation[] = [
  "ADAPTION",
  "PREQUEL",
  "SEQUEL",
  "PARENT",
  "SIDE_STORY",
  "CHARACTER",
  "SUMMARY",
  "ALTERNATIVE",
  "SPIN_OFF",
  "OTHER",
  "SOURCE",
  "COMPILATION",
  "CONTAINS",
];
