"use client";

import { Shuffle } from "lucide-react";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";
import getAnilistId from "@/lib/getAnilistId";

export default function RandomGenerator() {
  const router = useRouter();

  const handleRandomAnime = async () => {
    const id = await getAnilistId();
    if (id) router.push(`detail/${id}`);
  };
  return (
    <Button size={"icon"} onClick={handleRandomAnime}>
      <Shuffle />
    </Button>
  );
}
