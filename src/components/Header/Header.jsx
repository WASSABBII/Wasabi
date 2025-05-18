import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link } from "react-router-dom";
import "./Header.css";


export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (section) => {
    if (location.pathname !== "/main") {
      navigate("/main");
      // Подождать пока загрузится страница, потом скролл
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 100); // немного времени на переход
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

  return (
    <nav>
      <h2>WASABI</h2>
      <div className="link">
        <button onClick={() => handleScrollTo("main")}>Home</button>
        <button onClick={() => handleScrollTo("cards")}>info</button>
        <button onClick={() => handleScrollTo("effect")}>About Us</button>
        <Link to="/feedback">AI Chat</Link>
      </div>
    </nav>
  );
}
