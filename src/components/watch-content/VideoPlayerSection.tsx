"use client";

import { useEffect, useRef, useState } from "react";
import Artplayer from "artplayer";
import Hls from "hls.js";

type Track = {
  file: string;
  label?: string;
  kind: "captions" | "thumbnails";
  default?: boolean;
};

type StreamData = {
  streamingLink?: {
    link?: {
      file?: string;
      type?: string;
    };
    iframe?: string | null;
    tracks?: Track[];
  };
};

export default function VideoPlayerSection({ streamData }: { streamData?: StreamData }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const artRef = useRef<Artplayer | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (artRef.current) {
      artRef.current.destroy(true);
      artRef.current = null;
    }

    const streamUrl = streamData?.streamingLink?.link?.file;

    if (!streamUrl) {
      setError("Stream not available");
      return;
    }

    setError(null);

    const iframeUrl = streamData?.streamingLink?.iframe;
    const tracks = streamData?.streamingLink?.tracks || [];
    const subtitleTrack = tracks.find((t) => t.kind === "captions");

    const headers = {
      referer: iframeUrl ? new URL(iframeUrl).origin + "/" : window.location.origin + "/",
    };

    const proxyUrl =
      `${process.env.NEXT_PUBLIC_M3U8_PROXY}?url=` +
      encodeURIComponent(streamUrl) +
      "&headers=" +
      encodeURIComponent(JSON.stringify(headers));

    const art = new Artplayer({
      container: containerRef.current,
      url: proxyUrl,
      volume: 1,
      autoplay: false,
      fullscreen: true,
      setting: true,
      playbackRate: true,
      aspectRatio: true,
      subtitle: subtitleTrack
        ? {
            url: subtitleTrack.file,
            type: "vtt",
          }
        : undefined,
      customType: {
        m3u8: (video: HTMLVideoElement, url: string) => {
          if (Hls.isSupported()) {
            const hls = new Hls({
              enableWorker: true,
              lowLatencyMode: true,
            });

            hls.loadSource(url);
            hls.attachMedia(video);

            hls.on(Hls.Events.ERROR, function (_, data) {
              if (data.fatal) {
                setError("Failed to load video stream");
                hls.destroy();
              }
            });

            art.on("destroy", () => {
              hls.destroy();
            });
          } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = url;
          } else {
            setError("HLS not supported in this browser");
          }
        },
      },
    });

    artRef.current = art;

    return () => {
      art.destroy(true);
      artRef.current = null;
    };
  }, [streamData]);

  return (
    <div className="relative aspect-video max-h-[700px] w-full overflow-hidden rounded-sm bg-black">
      <div ref={containerRef} className="h-full w-full" />

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-white">
          <div className="text-5xl">⚠️</div>
          <p className="mt-3 text-lg font-medium">{error}</p>
        </div>
      )}
    </div>
  );
}
