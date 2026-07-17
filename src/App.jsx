import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Loader from "./components/Loader";
import CursorGlow from "./components/CursorGlow";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(true);

  // Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Scroll Button
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (loading) return <Loader />;

  return (
    <div className={darkMode ? "dark" : ""}>
      <Background darkMode={darkMode} />
      <CursorGlow />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      <About />
      <Education />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="
          fixed
          bottom-8
          right-8
          z-50
          w-14
          h-14
          rounded-full
          bg-gradient-to-r
          from-pink-500
          to-fuchsia-500
          text-white
          shadow-[0_10px_30px_rgba(236,72,153,.45)]
          hover:scale-110
          hover:-translate-y-1
          active:scale-95
          transition-all
          duration-300
        "
        >
          <FaArrowUp className="mx-auto text-lg" />
        </button>
      )}
    </div>
  );
}

export default App;