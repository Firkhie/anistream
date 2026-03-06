import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { AnimeBase, AnimeEpisode, FuzzyDate, HistoryEpisode } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeHtmlString(input: string) {
  if (!input) return "";

  return (
    input
      // remove <br> / <br />
      .replace(/<br\s*\/?>/gi, "")
      // remove <p> and </p>
      .replace(/<\/?p\s*>/gi, "")
      // escape <<text>>
      .replace(/<<([^<>]+)>>/g, "&lt;&lt;$1&gt;&gt;")
  );
}

export function formatUnixTime(input: number) {
  if (!input) return "-";
  return format(new Date(input * 1000), "HH:mm");
}

export function formatUnixDate(input: number) {
  if (!input) return "-";
  return format(new Date(input * 1000), "eeee, d MMM yyyy");
}

export function formatPlainDate(input: FuzzyDate) {
  if (!input || !input.year || !input.month || !input.day) return "-";

  const date = new Date(input.year, input.month - 1, input.day);

  return format(date, "eeee, d MMM yyyy");
}

export function saveWatchHistory({ animeBase, eps }: { animeBase: AnimeBase; eps: AnimeEpisode }) {
  if (typeof window === "undefined") return;

  const existHistory: HistoryEpisode[] = JSON.parse(localStorage.getItem("history_watch") || "[]");

  const title =
    animeBase.title?.userPreferred ||
    animeBase.title?.romaji ||
    animeBase.title?.english ||
    animeBase.title?.native ||
    "Untitled";

  const filtered = existHistory.filter(
    (item) => !(item.animeTitle === title && item.episode === eps.episode),
  );

  const newEps = {
    ...eps,
    animeId: animeBase.id,
    animeTitle: title,
  };
  const updated = [newEps, ...filtered].slice(0, 20);

  localStorage.setItem("history_watch", JSON.stringify(updated));
}
