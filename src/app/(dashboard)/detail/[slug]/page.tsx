import DetailContent from "@/components/detail-content";

export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DetailContent slug={slug} />;
}
