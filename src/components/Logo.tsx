import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-1">
      <Image alt="Image" src="/assets/logo.png" width={38} height={38} />
      <div className="flex flex-col leading-none font-extrabold">
        <span>ANI</span>
        <span className="text-primary">STREAM</span>
      </div>
    </Link>
  );
}
