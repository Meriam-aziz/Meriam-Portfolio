import Button from "../components/Button";
import cv from "../assets/pdf/Meriam_Aziz_AI_Engineer_CV.pdf";
import profile from "../assets/images/profile.png";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen hero-bg pt-32"
>
  <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
      {/* Background Decorations */}

<div className="absolute inset-0 -z-10">

  {/* Top Left Glow */}
  <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-pink-200/40 blur-[120px]" />

  {/* Bottom Right Glow */}
  <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-fuchsia-200/30 blur-[120px]" />

  {/* Small Glow */}
  <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-pink-100 blur-3xl" />

</div>
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

  {/* LEFT SIDE */}

  <div className="lg:mt-8">
    
<div className="relative inline-block">

  <h1 className="hero-name text-7xl lg:text-[80px] font-extrabold leading-[0.9] tracking-[-3px]">
    <span className="text-black">Meriam</span>{" "}
    <span className="
bg-gradient-to-r
from-pink-500
via-pink-500
to-fuchsia-500
bg-clip-text
text-transparent
drop-shadow-[0_0_15px_rgba(236,72,153,.25)]
">
Aziz
</span>
  </h1>
  <div className="absolute left-[340px] top-[160px] text-pink-300 text-3xl animate-pulse">

✦

</div>

<div className="absolute left-[210px] top-[330px] text-pink-200 text-xl animate-pulse delay-300">

✦

</div>
<div className="absolute top-44 left-[330px] text-pink-300 text-3xl animate-pulse">
✦
</div>

<div className="absolute top-52 left-[360px] text-pink-200 text-xl animate-pulse">
✦
</div>

</div>
    
<h2 className="text-2xl text-gray-700 mt-3 font-medium">
Artificial Intelligence Engineer
</h2>
<div className="mt-6">

    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-pink-500 to-transparent"></div>

    <div className="mt-2 ml-6 w-14 h-[2px] rounded-full bg-pink-300"></div>

</div>

    <p className="mt-8 text-lg leading-9 text-gray-500 dark:text-gray-400 max-w-xl">
      Building intelligent AI solutions with Machine Learning,
      Deep Learning, Computer Vision, NLP,
      LLMs, RAG & AI Agents.
    </p>

    <div className="flex gap-6 mt-12">
      <Button>🚀 Explore Projects</Button>

      <a href={cv} download>
        <Button variant="secondary">
          ⬇ Download CV
        </Button>
      </a>
    </div>

    <div className="flex items-center gap-5 mt-12">

      <a
        href="https://github.com/Meriam-aziz"
        target="_blank"
        rel="noreferrer"
        className="
w-12
h-12
rounded-full
bg-white
shadow-md
flex
items-center
justify-center
hover:bg-pink-500
hover:text-white
transition-all
hover:shadow-xl
duration-300
hover:-translate-y-1
"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/meriam-aziz"
        target="_blank"
        rel="noreferrer"
       className="
w-12
h-12
rounded-full
bg-white
shadow-md
flex
items-center
justify-center
hover:bg-pink-500
hover:text-white
hover:shadow-xl
transition-all
duration-300
hover:-translate-y-1
"
>
        <FaLinkedinIn />
      </a>

      <a
        href="mailto:YOUR_EMAIL"
        className="
w-12
h-12
rounded-full
bg-white
shadow-md
flex
items-center
justify-center
hover:bg-pink-500
hover:text-white
hover:shadow-xl
transition-all
duration-300
hover:-translate-y-1
"
      >
        <MdEmail />
      </a>

    </div>

  </div>

  {/* RIGHT SIDE */}

  <div className="relative flex justify-center mt-12">
    <div className="absolute -left-20 top-28 w-28 h-[2px] bg-pink-300 rotate-12"></div>

<div className="absolute -left-10 top-36 w-16 h-[2px] bg-pink-200 rotate-12"></div>

<div className="absolute -right-16 bottom-28 w-28 h-[2px] bg-pink-300 -rotate-12"></div>

<div className="absolute -right-6 bottom-20 w-16 h-[2px] bg-pink-200 -rotate-12"></div>
<div className="absolute top-44 left-10 grid grid-cols-4 gap-2">

{[...Array(16)].map((_,i)=>(
<div
key={i}
className="w-1.5 h-1.5 rounded-full bg-pink-300"
/>
))}

</div>

    {/* Glow */}
    <div className="absolute w-[470px] h-[470px] rounded-full bg-gradient-to-br from-pink-300/40 to-fuchsia-300/20 blur-[140px] animate-pulse"></div>
<div className="absolute w-[350px] h-[350px] rounded-full bg-fuchsia-300/20 blur-[90px]"></div>
<div className="absolute bottom-0 right-10 w-64 h-64 rounded-full bg-fuchsia-200 blur-[120px] opacity-40"></div>
<div className="absolute top-20 right-12 text-pink-300 text-3xl">
    ✦
</div>

<div className="absolute bottom-16 left-10 text-pink-300 text-xl">
    ✦
</div>
<div className="absolute left-0 top-32 flex flex-col gap-2">

<span className="w-2 h-2 rounded-full bg-pink-300"></span>

<span className="w-2 h-2 rounded-full bg-pink-300"></span>

<span className="w-2 h-2 rounded-full bg-pink-300"></span>

<span className="w-2 h-2 rounded-full bg-pink-300"></span>

</div>
<div className="absolute top-32 -right-8 w-5 h-5 border border-pink-300 rotate-45"></div>
<div className="absolute w-[510px] h-[510px] rounded-full shadow-[0_0_120px_rgba(236,72,153,.18)]"></div>
   {/* Large Circle */}
<div className="absolute w-[580px] h-[580px] rounded-full border border-pink-300/40"></div>
<div className="absolute w-[580px] h-[580px] rounded-full border border-pink-100/60"></div>

<div className="absolute w-[640px] h-[640px] rounded-full border border-pink-50/40"></div>
<div className="absolute w-[560px] h-[560px] rounded-full border border-pink-100/60"></div>
    {/* Decorative Circles */}
    <div className="absolute -top-6 left-8 w-6 h-6 rounded-full border-2 border-pink-300"></div>

    <div className="absolute bottom-10 right-5 w-5 h-5 rounded-full bg-pink-300"></div>

    <div className="absolute top-1/2 -left-10 w-4 h-4 rounded-full bg-pink-200"></div>
<div className="absolute top-24 left-0 grid grid-cols-4 gap-2 opacity-60">

{Array.from({length:16}).map((_,i)=>(

<div
key={i}
className="w-1.5 h-1.5 rounded-full bg-pink-300"
/>

))}

</div>
    <img
      src={profile}
      alt="Meriam Aziz"
      className="
relative
w-[430px]
lg:w-[520px]
object-contain
animate-float
transition-all
duration-500
hover:scale-[1.02]
hover:-translate-y-2
drop-shadow-[0_35px_70px_rgba(236,72,153,.28)]
"
    />

  </div>
</div>
</motion.div>
    </section>
  );
}

export default Hero;

