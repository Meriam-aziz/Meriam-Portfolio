import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 w-full z-50">
  <nav className="w-[94%] max-w-6xl mx-auto">
  <div className="flex items-center justify-between
      rounded-full
      bg-white/70 dark:bg-slate-900/80
      backdrop-blur-3xl
      border border-pink-100
      shadow-[0_15px_45px_rgba(236,72,153,.18)]
dark:shadow-[0_15px_45px_rgba(0,0,0,.45)]
      px-7 py-3">

    {/* Left */}

    <div className="flex items-center gap-3">

      <div
className="
w-10 h-10
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
hover:scale-110
transition-all
duration-300
"
>
MA
</div>

      <h1 className="
text-[24px]
font-extrabold
tracking-tight
text-gray-900
dark:text-white
">

        Meriam <span className="text-pink-500">Aziz</span>

      </h1>

    </div>

    {/* Center */}

    <ul className="hidden md:flex items-center gap-9 font-medium className="text-gray-600 dark:text-gray-300 dark:text-gray-300>
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

<div className="flex items-center gap-4">

  {/* Desktop Button */}
<button
  onClick={() => setDarkMode(!darkMode)}
 className="
text-2xl
hover:scale-110
transition
duration-300
drop-shadow-md
"
>
  {darkMode ? "☀️" : "🌙"}
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
    transition-all
    duration-300
    "
  >
    Get In Touch
  </a>

  {/* Mobile Menu Button */}

  <button
    onClick={() => setIsOpen(!isOpen)}
    className="md:hidden text-3xl text-pink-500"
  >
    ☰
  </button>

</div>
</div>
</nav>
      {isOpen && (
  <div
    className="
    md:hidden
    mt-3
    rounded-3xl
    bg-white/90 dark:bg-slate-900/90
    backdrop-blur-xl
    border
    border-pink-100 dark:border-slate-700
    shadow-xl
    p-6
    "
  >
    <div className="flex flex-col gap-5 text-center font-medium text-gray-700 dark:text-gray-200">

      <a href="#about" onClick={() => setIsOpen(false)}>
        About
      </a>

      <a href="#skills" onClick={() => setIsOpen(false)}>
        Skills
      </a>

      <a href="#certifications" onClick={() => setIsOpen(false)}>
        Certificates
      </a>

      <a href="#experience" onClick={() => setIsOpen(false)}>
        Experience
      </a>

      <a href="#projects" onClick={() => setIsOpen(false)}>
        Projects
      </a>

      <a href="#contact" onClick={() => setIsOpen(false)}>
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
        "
      >
        Get In Touch
      </a>

    </div>
  </div>
)}
    </header>
  );
}

export default Navbar;