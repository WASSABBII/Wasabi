import "./MainSection.css";
import video from "../Image/video.mp4" // путь к твоему видео
import logo from "../Image/logo1.png";
import CardsSection from "../CardSection";


export default function MainSection() {
  return (
    <>
    <section className="main-section">
      <video
        className="main-video"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      <img src={logo} className="logo"/>

      <div className="main-overlay">
        
        <h1>WI Diagnostics</h1>
        <p>Умная автодиагностика. Быстро. Точно. Надёжно.</p>
      </div>
    </section>
    
    
    </>
  );
}
