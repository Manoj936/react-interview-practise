import React from "react";
import VideoJS from "./Videojs";

export default function AdvancedVideoPlayer({ url }) {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    muted: true,
    loop: true,
    width: 300,
    height: 200,
    playbackRates: [0.25, 0.5, 1, 1.5, 2],
    sources: [
      {
        // Using ImageKit's HLS manifest URL
        // src: url + `ik-master.m3u8?tr=sr-240_360_480_720`,
        // type: "application/x-mpegURL",
         src: url ,
        type: "Video/mp4",
      },
    ],
    poster: `${url}ik-thumbnail.jpg?tr=w-1200,h-680,so-30`,
      tracks: [
      {
        kind: "captions",
        src: "/english.vtt",
        srclang: "en",
        label: "English",
        default: true,
      },
      {
        kind: "captions",
        src: "/hindi.vtt",
        srclang: "hi",
        label: "Hindi",
        default: false,
      },
  
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <div>Rest of app here</div>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} width={600} height={400} />
      <div>Rest of app here</div>
    </>
  );
}
