import React, { useState, useRef } from "react";
import playButton from "../images/play-button-white.png";
import { Container } from "react-bootstrap";
import Bird from "./bird";

const Video = ({ source }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef(null);
  const togglePlaystate = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  const toggleMuted = () => {
    videoRef.current.muted = !videoRef.current.muted;
  };

  return (
    <Container
      className="video-container"
      style={{
        position: "relative",
        marginTop: "0rem",
        transform: "rotate(3deg)",
      }}
    >
      <div style={{ position: "relative", maxWidth: "140vh" }}>
        {!isPlaying && (
          <img
            alt="play button"
            src={playButton}
            style={{
              width: "20%",
              height: "auto",
              position: "absolute",
              left: "40%",
              top: "35%",
              pointerEvents: "none",
            }}
          />
        )}
        <div className="pokingBird">
          <Bird color="cls-0" border="cls-01" />
        </div>
        <div
          style={{
            width: "100%",
            height: "100%", // Ensure the container has a defined height
            border: " #E6AF2E solid 44px",
            borderRadius: "92% 8% 91% 9% / 12% 84% 16% 88%",
            display: "flex", // Use flex display to center the video
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            muted
            loop
            autoPlay
            className="w-100 h-100"
            ref={videoRef}
            onClick={(event) => {
              togglePlaystate();
              toggleMuted();
            }}
            style={{
              width: "100%", // Make the video fill the available space
              height: "100%",
              objectFit: "cover", // Maintain aspect ratio and cover the container
            }}
          >
            <source src={source} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Container>
  );
};

export default Video;
