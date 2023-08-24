import { Youtube } from "lucide-react";
import React, { useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface YtPlayerProps {
  url: string;
}

const YtPlayer: React.FC<YtPlayerProps> = ({ url }) => {
  const [videoUrl, setVideoUrl] = useState(url);

  const onPlayerReady: YouTubeProps["onReady"] = (event: any) => {
    event.target.setVolume(20);
    event.target.playVideo();
  };

  const opts = {
    width: "100%",
    height: "100%",
  };

  return (
    <div id="player" className="h-full w-full">
      <YouTube
        videoId={videoUrl}
        opts={opts}
        onReady={onPlayerReady}
        className="h-full w-full"
      />
    </div>
  );
};

export default YtPlayer;
