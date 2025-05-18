import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Element } from "react-scroll";

import Header from "./components/Header/Header.jsx";
import MainSection from "./components/MainSection/MainSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import EffectSection from "./components/EffectSection.jsx";
import CardsSection from "./components/CardSection.jsx"; // если ты хочешь его тоже скроллить
import './index.css';

export default function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={
            <>
              <Element name="main">
                <MainSection />
              </Element>

              <Element name="cards">
                <CardsSection />
              </Element>

              <Element name="effect">
                <EffectSection />
              </Element>
            </>
          } />
          <Route path="/feedback" element={<FeedbackSection />} />
        </Routes>
      </main>
    </Router>
  );
}
