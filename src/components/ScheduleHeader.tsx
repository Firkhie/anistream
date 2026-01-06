"use client";

import { useEffect, useMemo, useState } from "react";

export default function ScheduleHeader() {
  const [time, setTime] = useState<Date>(new Date());
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = useMemo<string>(() => {
    if (!mounted) return "";

    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }, [time, mounted]);

  return (
    <div className="from-background via-primary/75 to-background flex flex-col items-center gap-2 bg-linear-to-r px-5 py-8">
      <h2 className="text-3xl font-bold text-white">Anime Airing Schedule</h2>
      <h3 className="font-light text-white">Stay updated with the latest anime airing times!</h3>
      <div className="bg-secondary/25 rounded-sm px-4 py-2 font-semibold">
        Current Time: {formattedTime}
      </div>
      <h6 className="text-xs font-light text-foreground/75">
        * Airing times might change depending on the broadcaster
      </h6>
    </div>
  );
}
