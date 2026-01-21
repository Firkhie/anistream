"use client";

import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "bg-primary fixed right-5 bottom-5 z-50 flex cursor-pointer items-center justify-center rounded-full p-2 transition-all duration-300 md:hidden",
        show ? "scale-100 opacity-100" : "pointer-events-none scale-0 opacity-0",
      )}
      onClick={scrollToTop}
    >
      <ChevronUp className="h-5 w-5" />
    </div>
  );
}
