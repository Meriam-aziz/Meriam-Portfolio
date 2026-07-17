import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
function About() {
  return (
    <section
      id="about"
      className="pt-24 pb-20 hero-bg scroll-mt-28"
    >
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >

    <div className="max-w-6xl mx-auto px-6">
<div className="absolute inset-0 opacity-[0.06] bg-grid-pattern -z-10"></div>
{/* Background */}

<div className="absolute inset-0 -z-10">

  <div className="absolute -top-24 left-10 w-72 h-72 rounded-full bg-pink-200/40 blur-[120px]" />

  <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-fuchsia-200/30 blur-[130px]" />

  <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-pink-100 blur-[120px]" />

</div>
<div className="absolute top-36 left-24 text-pink-300 text-2xl">
 ✦
</div>

<div className="absolute top-52 right-40 w-3 h-3 rounded-full bg-pink-300"></div>
<div className="absolute top-20 left-20 text-pink-300 text-3xl">
 ✦
</div>
<div className="absolute left-16 top-48 text-pink-300 text-2xl">
✦
</div>
<div className="absolute right-28 top-40 w-5 h-5 border border-pink-300 rotate-45"></div>
<div className="absolute right-10 top-1/3 flex flex-col gap-2">
  <span className="w-2 h-2 rounded-full bg-pink-300"></span>
  <span className="w-2 h-2 rounded-full bg-pink-300"></span>
  <span className="w-2 h-2 rounded-full bg-pink-300"></span>
  <span className="w-2 h-2 rounded-full bg-pink-300"></span>
</div>
<div className="absolute left-1/2 bottom-24 -translate-x-1/2 w-[650px] h-[250px] bg-pink-300/20 blur-[140px] rounded-full -z-10"></div>
        {/* Heading */}

        <div className="text-center mb-16">

  <p className="text-pink-500 text-5xl font-bold uppercase tracking-[10px]">
    ABOUT ME
  </p>

  <h2 className="mt-5 text-2xl lg:text-xl font-extrabold leading-tight">
    Passionate About
    <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
      {" "}AI Innovation.
    </span>
  </h2>
<div className="flex justify-center mt-5">

<div className="w-28 h-1 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500"></div>

</div>
</div>

        <p
  className="text-center mx-auto text-gray-600 dark:text-gray-300 leading-10 max-w-[950px] text-[20px]"
>
  I am an Artificial Intelligence Engineer passionate about building
  intelligent solutions using Machine Learning, Deep Learning,
  Computer Vision, Natural Language Processing, Large Language Models,
  Retrieval-Augmented Generation (RAG), and AI Agents.

  <br /><br />

  I enjoy transforming ideas into real-world applications and
  continuously exploring modern AI technologies to create impactful,
  scalable, and user-focused solutions.
</p>

        {/* Skills */}
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[900px] h-[250px] rounded-full bg-pink-200/30 blur-[120px] -z-10"></div>
        <div className="grid md:grid-cols-2 gap-10 mt-24">

          <div className="
          
rounded-[30px]
bg-white/20
backdrop-blur-2xl
border border-pink-300/30
px-10 py-8
shadow-[0_25px_60px_rgba(236,72,153,.15)]
hover:-translate-y-2
hover:scale-[1.03]
hover:border-pink-300
hover:bg-white
hover:shadow-[0_25px_60px_rgba(236,72,153,.18)]
transition-all
duration-500
">


            <h3 className="text-2xl font-bold text-fuchsia-500">
              Core Expertise
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 mt-3 mb-6"></div>
          
            </h3>

            <ul className="mt-8 space-y-4 text-gray-600 dark:text-gray-300 text-lg">

              <li className="flex items-center gap-3">
  <Sparkles
    size={16}
    className="text-fuchsia-500"
  />
  Machine Learning
</li>
<li className="flex items-center gap-3">
   <Sparkles size={16} className="text-fuchsia-500" />
   Deep Learning
</li>
<li className="flex items-center gap-3">
   <Sparkles size={16} className="text-fuchsia-500" />
   Computer Vision
</li>
<li className="flex items-center gap-3">
   <Sparkles size={16} className="text-fuchsia-500" />
   NLP & LLMs
</li>
<li className="flex items-center gap-3">
   <Sparkles size={16} className="text-fuchsia-500" />
   RAG Systems
</li>
<li className="flex items-center gap-3">
  <Sparkles size={16} className="text-fuchsia-500" />
   AI Agents
</li>
            </ul>

          </div>

          <div className="
rounded-[30px]
bg-white/20
backdrop-blur-2xl
border border-pink-300/30
px-10 py-8
shadow-[0_25px_60px_rgba(236,72,153,.15)]
hover:-translate-y-2
hover:scale-[1.03]
hover:border-pink-300
hover:bg-white
hover:shadow-[0_25px_60px_rgba(236,72,153,.18)]
transition-all
duration-500
">

            <h3 className="text-2xl font-bold text-fuchsia-500">
              Currently Learning
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 mt-3 mb-6"></div>
            </h3>

            <ul className="mt-8 space-y-4 text-gray-600 dark:text-gray-300 text-lg">

              <li className="flex items-center gap-3">
   <Sparkles size={16} className="text-fuchsia-500" />
   Multi-Agent Systems
</li>
<li className="flex items-center gap-3">
   <Sparkles size={16} className="text-fuchsia-500" />
   Generative AI
</li>
<li className="flex items-center gap-3">
   <Sparkles size={16} className="text-fuchsia-500" />
   LangChain
</li>
<li className="flex items-center gap-3">
   <Sparkles size={16} className="text-fuchsia-500" />
   Vector Databases
</li>
<li className="flex items-center gap-3">
   <Sparkles size={16} className="text-fuchsia-500" />
   Prompt Engineering
</li>
<li className="flex items-center gap-3">
   <Sparkles size={16} className="text-fuchsia-500" />
   AI Deployment
</li>
            </ul>

          </div>

        </div>

      </div>
       </motion.div>
    </section>
  );
}

export default About;