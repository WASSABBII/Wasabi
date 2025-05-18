import { Element } from "react-scroll"; // 👈 для scroll
import "./EffectSection.css";

export default function EffectSection() {
  return (
    <Element name="effect"> {/* 👈 якорь для прокрутки */}
      <section className="effect-section">
        <h2>Почему именно WASABI?</h2>
        <p>
          Мы используем интеллектуальные алгоритмы, чтобы быстро и точно диагностировать неисправности в автомобиле.
        </p>
        {/* Добавь остальное содержимое */}
      </section>
    </Element>
  );
}
