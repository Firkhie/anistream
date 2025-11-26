import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <Image alt="Image" src="/assets/logo.png" width={38} height={38} />
      <div className="flex flex-col font-extrabold leading-none">
        <span>ANI</span>
        <span className="text-primary">STREAM</span>
      </div>
    </div>
  );
}
