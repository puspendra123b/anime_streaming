// VideoPlayer.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const VideoPlayer = ({url}) => {
  const [videoUrl, setVideoUrl] = useState("");
  
  const originalUrl = url;
  const proxyServerUrl = "https://api-check-one-ecru.vercel.app/proxy-video"; // Update with your server URL

  useEffect(() => {
    // Construct the proxied URL
    setVideoUrl(`${proxyServerUrl}?url=${encodeURIComponent(originalUrl)}`);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
      {videoUrl && (
        <iframe
          src={originalUrl}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="One Piece Episode"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
