import DetailContent from "@/components/detail-content";
import DetailContentSkeleton from "@/components/detail-content/DetailContentSkeleton";
import { Suspense } from "react";

export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <Suspense fallback={<DetailContentSkeleton />}>
      <DetailContent slug={slug} />
    </Suspense>
  );
}
