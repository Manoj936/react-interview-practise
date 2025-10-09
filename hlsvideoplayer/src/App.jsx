import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BasicVideoPlayer from "./components/BasicVideoPlayer";
import { videoUrl } from "./constant";
import AdvancedVideoPlayer from "./components/AdvancedVideoPlayer";

function App() {
  return (
    <>
      {/* <BasicVideoPlayer url={videoUrl} /> */}
      <AdvancedVideoPlayer url={videoUrl} />
    </>
  );
}

export default App;
