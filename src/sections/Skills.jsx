import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
function Skills() {
  const skillCategories = [
  {
    title: "🤖 AI & Machine Learning",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn"
    ]
  },

  {
    title: "👁 Computer Vision",
    skills: [
      "OpenCV",
      "YOLOv8",
    "Image Processing",
    "Object Detection",
    "Segmentation"
    ]
  },

  {
    title: "🧠 LLMs & AI Agents",
    skills: [
      "LLMs",
      "LangChain",
      "RAG",
      "Gemini API",
      "Prompt Engineering",
      "FAISS"
    ]
  },

  {
    title: "🛠 Development & Tools",
    skills: [
      "Flask",
      "Git & GitHub",
      "Pandas",
      "NumPy",
      "Streamlit"
    ]
  }
];

  return (
    <section
  id="skills"
  className="min-h-screen hero-bg pt-32"

>

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="absolute inset-0 -z-10">

  <div className="absolute -top-24 left-10 w-72 h-72 rounded-full bg-pink-200/40 blur-[120px]" />

  <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-fuchsia-200/30 blur-[130px]" />

  <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-pink-100 blur-[120px]" />

</div>
<div className="absolute top-20 left-20 text-pink-300 text-3xl">
 ✦
</div>

<div className="absolute right-28 top-40 w-5 h-5 border border-pink-300 rotate-45"></div>

<div className="absolute right-10 top-1/3 flex flex-col gap-2">
  <span className="w-2 h-2 rounded-full bg-pink-300"></span>
  <span className="w-2 h-2 rounded-full bg-pink-300"></span>
  <span className="w-2 h-2 rounded-full bg-pink-300"></span>
  <span className="w-2 h-2 rounded-full bg-pink-300"></span>
</div>

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-pink-500 text-5xl font-bold uppercase tracking-[10px]">
            MY SKILLS
          </p>

          <h2 className="mt-5 text-[38px] lg:text-3xl font-extrabold">
           AI 
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Tech Stack
            </span>
          </h2>

          <div className="flex justify-center mt-10">
            <div className="w-28 h-1 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500"></div>
          </div>
<p className="mt-5 text-gray-500 dark:text-gray-400 leading-8 text-lg max-w-2xl mx-auto">
A collection of the technologies, frameworks, and AI tools I use to build intelligent solutions.
</p>
        </div>
<div className="grid md:grid-cols-2 gap-8 mt-20">

  {skillCategories.map((category, index) => (

    <div
      key={index}
      className="
      glass-card
      rounded-[36px]
      min-h-[240px]
      px-8 py-7
      shadow-[0_15px_40px_rgba(236,72,153,.12)]
      dark:shadow-[0_15px_40px_rgba(0,0,0,.45)]
      hover:-translate-y-3
      hover:shadow-[0_25px_60px_rgba(236,72,153,.18)]
      transition-all
      duration-500
      "
    >

      <h3 className="text-2xl font-bold text-pink-500 mb-8">

        {category.title}

      </h3>

      <div className="space-y-4">

        {category.skills.map((skill) => (

<div
key={skill}
className="
inline-flex
items-center
gap-3
px-4
py-2
rounded-full
bg-pink-50
border
border-pink-100
text-gray-800
font-medium
"
>

            <div
className="
w-2.5
h-2.5
rounded-full
bg-gradient-to-r
from-pink-500
to-fuchsia-500
"
/>

            {skill}

          </div>

        ))}

      </div>

    </div>

  ))}

</div>

      </div>
      </motion.div>
    </section>
  );
}

export default Skills;