import { useState } from "react";
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


function App() {
  const [darkMode, setDarkMode] = useState(false);
  

  return (
    <div className={darkMode ? "dark" : ""}>
    <>
  <Background darkMode={darkMode} />

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

</>
    </div>
  );
}
 
export default App;