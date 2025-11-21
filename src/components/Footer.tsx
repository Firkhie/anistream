import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col gap-2">
      <div>LOGO</div>
      <span>
        AniStream does not store any files on our server, we only linked to the media which is
        hosted on 3rd party services.
      </span>
      <hr />
      <span>
        © AniStream | Website Made by{" "}
        <Link href="https://alfalakhi.catco.uno/">Firdig Alfalakhi</Link> | Design inspired by{" "}
        <Link href="https://www.miruro.tv/">Miruro</Link>
      </span>
    </div>
  );
}
