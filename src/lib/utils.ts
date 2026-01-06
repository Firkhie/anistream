import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeHtmlString(input: string) {
  if (!input) return "";

  let sanitized = input.replace(/<br\s*\/?>/gi, "");
  sanitized = sanitized.replace(/<<([^<>]+)>>/g, "&lt;&lt;$1&gt;&gt;");

  return sanitized;
}

export function formatUnixTime(input: number) {
  if (!input) return "-";
  return format(new Date(input * 1000), "HH:mm");
}

export function formatUnixDate(input: number) {
  if (!input) return "-";
  return format(new Date(input * 1000), "eeee, d MMM yyyy");
}
