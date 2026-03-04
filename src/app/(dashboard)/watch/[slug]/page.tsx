import WatchContent from "@/components/watch-content";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import getAnimeEpisodesById from "@/lib/getAnimeEpisodesById";

export default async function WatchPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ epsId?: string }>;
}) {
  const { slug } = await params;
  const { epsId } = await searchParams;

  if (!epsId) {
    const episodes = await getAnimeEpisodesById({ id: slug });

    if (episodes?.length) {
      redirect(`/watch/${slug}?epsId=${episodes[0].id}`);
    }
  }

  return (
    <Suspense fallback={<>Loading</>}>
      <WatchContent slug={slug} epsId={epsId!} />
    </Suspense>
  );
}
