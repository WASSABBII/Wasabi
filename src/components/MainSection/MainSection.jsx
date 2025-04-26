import React from "react";
import "./MainSection.css";
import video from "./Image/video.mp4"; // путь к твоему видео

export default function MainSection() {
  return (
    <section className="main-section">
      <video
        className="main-video"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="main-overlay">
        <h1>WI Diagnostics</h1>
        <p>Умная автодиагностика. Быстро. Точно. Надёжно.</p>
      </div>
    </section>
  );
}
