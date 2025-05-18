import React, { useState } from "react";
import businessgoal from "../components/Image/businessgoal.png";
import success from "../components/Image/success.png";
import focus from "../components/Image/focus.png";
import "./cardsection.css";

const slides = [
  {
    image: businessgoal,
    title: "Project Goal",
    text: "The goal of the project is to develop a diagnostic tool based on artificial intelligence to automate and improve the accuracy of vehicle fault diagnostics. The application will significantly speed up the diagnostic process and predict potential faults, ensuring more efficient vehicle maintenance."
  },
  {
    image: focus,
    title: "Key Objectives",
    text: (
      <>
        <p><strong>Minimizing Diagnostic Time:</strong> AI-based diagnostics will be faster, analyzing vehicle sensor data efficiently.</p>
        <p><strong>Reducing Dependence on Human Knowledge:</strong> Machine learning will reduce human error and improve fault detection.</p>
        <p><strong>Reducing Vehicle Maintenance Costs:</strong> Early fault prediction allows planned maintenance, reducing unexpected repairs.</p>
      </>
    )
  },
  {
    image: success,
    title: "Research Focus",
    text: "The project focuses on using artificial intelligence to analyze vehicle data and uncover fault patterns. Machine learning models will enhance fault prediction and diagnostic precision, improving service efficiency and preventing future issues."
  }
];

export default function CardSection() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="cardsection">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="slide-image"
          />
          <div className="slide-content">
            <h2 className="slide-title">{slide.title}</h2>
            <div className="slide-text">{slide.text}</div>
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className="nav-button prev" aria-label="Previous Slide">
        &#10094;
      </button>
      <button onClick={nextSlide} className="nav-button next" aria-label="Next Slide">
        &#10095;
      </button>
    </section>
  );
}
