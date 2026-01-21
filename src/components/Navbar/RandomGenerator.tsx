"use client";

import { Shuffle } from "lucide-react";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";
import getAnilistId from "@/lib/getAnilistId";
import { toast } from "sonner";

export default function RandomGenerator() {
  const router = useRouter();

  const handleRandomAnime = async () => {
    const id = await getAnilistId();
    if (id) router.push(`detail/${id}`);
    else toast.error("Fetch anime failed.");
  };

  return (
    <Button size={"icon"} onClick={handleRandomAnime}>
      <Shuffle />
    </Button>
  );
}
