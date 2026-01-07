import SubSection from "./SubSection";
import MainSection from "./MainSection";

export default function DashboardContent() {
  return (
    <div className="flex flex-col gap-12 lg:flex-row">
      <MainSection />
      <SubSection />
    </div>
  );
}
