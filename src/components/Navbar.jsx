import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
const [isOpen, setIsOpen] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
   <header
className="
fixed
top-5
left-1/2
z-50
w-full
-translate-x-1/2
"
>
  <nav className="w-[94%] max-w-6xl mx-auto">
  <div
  className={`
flex items-center justify-between
rounded-full
px-4 md:px-7 py-3
border
hover:border-pink-300
transition-all
duration-500

${
  scrolled
    ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-3xl border-pink-200 shadow-[0_20px_60px_rgba(236,72,153,.22)] dark:shadow-[0_20px_60px_rgba(0,0,0,.55)]"
    : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border-pink-100 shadow-[0_10px_25px_rgba(236,72,153,.10)]"
}
`}
>

    {/* Left */}

    <div className="flex items-center gap-2">

      <div
className="
w-8 h-8 md:w-10 md:h-10
rounded-full
bg-gradient-to-br
from-pink-500
to-fuchsia-500
flex
items-center
justify-center
text-white
font-bold
text-sm
shadow-md
hover:rotate-12
hover:shadow-pink-400/40
hover:scale-110
transition-all
duration-300
"
>
MA
</div>

      <div>
    <h1 className="text-base md:text-xl font-bold text-gray-900 dark:text-white">
  Meriam <span className="text-pink-500">Aziz</span>
</h1>

    <p className="hidden md:block text-xs text-gray-500 dark:text-gray-400">
        AI Engineer
    </p>
</div>

    </div>

    {/* Center */}

    <ul className="hidden md:flex items-center gap-9 font-medium text-gray-600 dark:text-gray-300">
  <li>
    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
  </li>

  <li>
    <a href="#skills"onClick={() => setIsOpen(false)}>Skills</a>
  </li>

<li>
  <a href="#certifications" onClick={() => setIsOpen(false)}>
    Certificates
  </a>
</li>

  <li>
    <a href="#experience"onClick={() => setIsOpen(false)}>Experience</a>
  </li>

  <li>
    <a href="#projects"onClick={() => setIsOpen(false)}>Projects</a>
  </li>

  <li>
    <a href="#contact"onClick={() => setIsOpen(false)}>Contact</a>
  </li>
</ul>

    {/* Right */}

<div className="flex items-center gap-2 md:gap-4">

  {/* Desktop Button */}
<button
  onClick={() => setDarkMode(!darkMode)}
  className="
p-3
hover:scale-110
rounded-full
hover:bg-pink-100
dark:hover:bg-slate-700
transition-all
duration-300
"
>
  {darkMode ? (
    <Sun size={20} />
  ) : (
    <Moon size={20} />
  )}
</button>
  <a
    href="#contact"
    
    className="
hidden md:block
rounded-full
bg-gradient-to-r
from-pink-500
to-fuchsia-500
text-white
font-semibold
px-6
py-3
shadow-[0_10px_30px_rgba(236,72,153,.35)]
hover:scale-105
hover:shadow-[0_15px_40px_rgba(236,72,153,.45)]
transition-all
duration-300
"
  >
    Get In Touch
  </a>

  {/* Mobile Menu Button */}

  <button
onClick={()=>setIsOpen(!isOpen)}
className="md:hidden text-pink-500"
>

{isOpen ? <X size={30}/> : <Menu size={30}/>}

</button>

</div>
</div>
</nav>
      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="
      md:hidden
      mt-3
      rounded-3xl
      bg-white/90
      dark:bg-slate-900/90
      backdrop-blur-xl
      border
      border-pink-200/50
      dark:border-slate-700
      shadow-xl
      p-6
      "
    >
      <div className="flex flex-col gap-6 text-center font-medium text-gray-700 dark:text-gray-200">

        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="
          relative
          hover:text-pink-500
          transition-all
          duration-300
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-0
          after:bg-pink-500
          after:transition-all
          after:duration-300
          hover:after:w-full
          "
        >
          About
        </a>

        <a
          href="#skills"
          onClick={() => setIsOpen(false)}
          className="
          relative
          hover:text-pink-500
          transition-all
          duration-300
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-0
          after:bg-pink-500
          after:transition-all
          after:duration-300
          hover:after:w-full
          "
        >
          Skills
        </a>

        <a
          href="#certifications"
          onClick={() => setIsOpen(false)}
          className="
          relative
          hover:text-pink-500
          transition-all
          duration-300
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-0
          after:bg-pink-500
          after:transition-all
          after:duration-300
          hover:after:w-full
          "
        >
          Certificates
        </a>

        <a
          href="#experience"
          onClick={() => setIsOpen(false)}
          className="
          relative
          hover:text-pink-500
          transition-all
          duration-300
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-0
          after:bg-pink-500
          after:transition-all
          after:duration-300
          hover:after:w-full
          "
        >
          Experience
        </a>

        <a
          href="#projects"
          onClick={() => setIsOpen(false)}
          className="
          relative
          hover:text-pink-500
          transition-all
          duration-300
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-0
          after:bg-pink-500
          after:transition-all
          after:duration-300
          hover:after:w-full
          "
        >
          Projects
        </a>

        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="
          relative
          hover:text-pink-500
          transition-all
          duration-300
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-0
          after:bg-pink-500
          after:transition-all
          after:duration-300
          hover:after:w-full
          "
        >
          Contact
        </a>

        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="
          mt-3
          rounded-full
          bg-gradient-to-r
          from-pink-500
          to-fuchsia-500
          text-white
          py-3
          font-medium
          hover:scale-105
          transition-all
          duration-300
          "
        >
          Get In Touch
        </a>

      </div>
    </motion.div>
  )}
</AnimatePresence>
      </header>
  );
}

export default Navbar;