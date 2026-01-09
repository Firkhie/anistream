import DetailContent from "@/components/detail-content";
import { Suspense } from "react";

export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <Suspense fallback={<>Loading</>}>
      <DetailContent slug={slug} />
    </Suspense>
  );
}
