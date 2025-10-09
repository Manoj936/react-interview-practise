import React from "react";

export default function BasicVideoPlayer({ url }) {
  return (
     <div>
      <video autoPlay={false} controls muted src={url} width={600} height={400} loop={true}>
        <track
          kind="subtitles"
          src="/english.vtt"
          srcLang="en"
          label="English"
          default
        />
           <track
          kind="subtitles"
          src="/hindi.vtt"
          srcLang="hi"
          label="Hindi"
          
        />
      </video>
    </div>
  );
}
