import RankingSection from "./RankingSection";
import UpdatedAnimeSection from "./UpdatedAnimeSection";

export default function DashboardContent() {
  return (
    <div className="flex gap-12">
      <UpdatedAnimeSection />
      <RankingSection />
    </div>
  );
}
