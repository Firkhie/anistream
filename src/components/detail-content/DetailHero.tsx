export function DetailHero({ banner }: { banner?: string }) {
  return (
    <div
      className="h-[200px] w-full rounded-sm bg-cover bg-center md:h-[250px] lg:h-[300px]"
      style={{ backgroundImage: `url(${banner})` }}
    />
  );
}
