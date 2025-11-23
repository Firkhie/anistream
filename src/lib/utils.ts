import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removeBrTags(input: string) {
  return input.replace(/<br\s*\/?>/gi, "");
}
