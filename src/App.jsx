import React, { useRef } from "react";
import Header from "./components/Header/Header.jsx";
import MainSection from "./components/MainSection/MainSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import EffectSection from "./components/EffectSection.jsx";
import './index.css';

export default function App() {
  const mainRef = useRef(null);
  const feedbackRef = useRef(null);
  const effectRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "main" && mainRef.current) mainRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "feedback" && feedbackRef.current) feedbackRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "effect" && effectRef.current) effectRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header onChange={scrollToSection} />

      <main>
        <section ref={mainRef}>
          <MainSection /> {/* 🔁 Здесь будет анимированная машина */}
        </section>

        <section ref={feedbackRef}>
          <FeedbackSection />
        </section>

        <section ref={effectRef}>
          <EffectSection />
        </section>
      </main>
    </>
  );
}
