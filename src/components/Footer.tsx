import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="flex pt-16 flex-col gap-3">
      <Logo />
      {/* Desc */}
      <span className="text-xs lg:text-sm text-muted-foreground/75">
        AniStream does not store any files on our server, we only linked to the media which is
        hosted on 3rd party services.
      </span>
      <hr />
      <span className="text-xs lg:text-sm text-muted-foreground/75">
        © AniStream | Website Made by{" "}
        <Link href="https://alfalakhi.catco.uno/" className="text-foreground">
          Firdig Alfalakhi
        </Link>{" "}
        | Design inspired by{" "}
        <Link href="https://www.miruro.tv/" className="text-foreground">
          Miruro
        </Link>
      </span>
    </div>
  );
}
