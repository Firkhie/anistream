import ScheduleHeader from "@/components/ScheduleHeader";
import ScheduleLoader from "@/components/ScheduleLoader";

export default function SchedulePage() {
  return (
    <div className="flex flex-col gap-4">
      <ScheduleHeader />
      <ScheduleLoader />
    </div>
  );
}
