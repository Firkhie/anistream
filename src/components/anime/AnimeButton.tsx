import { cn } from "@/lib/utils";
import Link from "next/link";

type AnimeButtonIcon = "anilist" | "mal";
type AnimeButtonSize = "large" | "medium";

const buttonIcons: Record<AnimeButtonIcon, React.ReactNode> = {
  anilist: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M6.361 2.943L0 21.056h4.942l1.077-3.133H11.4l1.052 3.133H22.9c.71 0 1.1-.392 1.1-1.101V17.53c0-.71-.39-1.101-1.1-1.101h-6.483V4.045c0-.71-.392-1.102-1.101-1.102h-2.422c-.71 0-1.101.392-1.101 1.102v1.064l-.758-2.166zm2.324 5.948l1.688 5.018H7.144z"
      />
    </svg>
  ),
  mal: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 lg:h-8 lg:w-8" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M8.273 7.247v8.423l-2.103-.003v-5.216l-2.03 2.404l-1.989-2.458l-.02 5.285H.001L0 7.247h2.203l1.865 2.545l2.015-2.546l2.19.001zm8.628 2.069l.025 6.335h-2.365l-.008-2.871h-2.8c.07.499.21 1.266.417 1.779c.155.381.298.751.583 1.128l-1.705 1.125c-.349-.636-.622-1.337-.878-2.082a9.296 9.296 0 0 1-.507-2.179c-.085-.75-.097-1.471.107-2.212a3.908 3.908 0 0 1 1.161-1.866c.313-.293.749-.5 1.1-.687c.351-.187.743-.264 1.107-.359a7.405 7.405 0 0 1 1.191-.183c.398-.034 1.107-.066 2.39-.028l.545 1.749H14.51c-.593.008-.878.001-1.341.209a2.236 2.236 0 0 0-1.278 1.92l2.663.033l.038-1.81h2.309zm3.992-2.099v6.627l3.107.032l-.43 1.775h-4.807V7.187l2.13.03z"
      />
    </svg>
  ),
};

const animeLink: Record<AnimeButtonIcon, (id: string) => string> = {
  anilist: (id) => `https://anilist.co/anime/${id}`,
  mal: (id) => `https://myanimelist.net/anime/${id}`,
};

const buttonSizes: Record<AnimeButtonSize, string> = {
  large: "h-10 px-6",
  medium: "h-8 px-5",
};

type AnimeButtonProps = {
  icon: AnimeButtonIcon;
  size: AnimeButtonSize;
  animeId: number;
  className?: string;
};

export default function AnimeButton({ icon, size, animeId, className }: AnimeButtonProps) {
  return (
    <Link
      href={animeLink[icon](String(animeId || ""))}
      target="_blank"
      className={cn(
        "bg-secondary/50 flex w-full items-center justify-center rounded-sm",
        buttonSizes[size],
        className,
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {buttonIcons[icon]}
    </Link>
  );
}
