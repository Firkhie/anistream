"use client";

import TrendingFilter from "@/components/TrendingFilter";
import TrendingLoader from "@/components/TrendingLoader";
import { useState } from "react";

export default function TrendingPage() {
  const [season, setSeason] = useState<"winter" | "spring" | "summer" | "fall">("winter");

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <TrendingFilter season={season} onChangeSeason={setSeason} />
      <TrendingLoader season={season} />
    </div>
  );
}
