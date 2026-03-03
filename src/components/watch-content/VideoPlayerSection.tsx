"use client";

import { useEffect, useRef } from "react";
import Artplayer from "artplayer";
import Hls from "hls.js";

export default function VideoPlayerSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const art = new Artplayer({
      container: containerRef.current,
      poster:
        "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
      url: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
      volume: 1,
      autoplay: false,
      fullscreen: true,
      setting: true,
      playbackRate: true,
      aspectRatio: true,
      customType: {
        m3u8: (video: HTMLVideoElement, url: string) => {
          if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(video);
          } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = url;
          }
        },
      },
    });

    return () => {
      art.destroy(true);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="aspect-video max-h-[700px] w-full overflow-hidden rounded-sm"
    />
  );
}
