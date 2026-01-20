import WatchContent from "@/components/watch-content";
import { Suspense } from "react";

export default async function WatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <Suspense fallback={<>Loading</>}>
      <WatchContent slug={slug} />
    </Suspense>
  );
}
