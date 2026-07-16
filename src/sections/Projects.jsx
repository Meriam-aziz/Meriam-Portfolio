import aiosCover from "../assets/projects/aios.jpg";
import deafCover from "../assets/projects/deaf.png";
import diabetsCover from "../assets/projects/diabets.jpg";
import mnistCover from "../assets/projects/mnist.jpg";
import urlCover from "../assets/projects/url.png";
import ocrCover from "../assets/projects/ocr.png";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
function Projects() {
  return (
   <section
  id="projects"
  className="min-h-screen hero-bg pt-32"


>

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
      <div className="absolute top-44 right-36 w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>

<div className="absolute bottom-40 left-40 w-2 h-2 bg-fuchsia-300 rounded-full animate-ping"></div>
<div className="absolute inset-0 overflow-hidden">

  <div
    className="
    absolute
    w-96
    h-96
    bg-pink-400/20
    blur-[120px]
    rounded-full
    -top-20
    -left-24
    "
  ></div>

  <div
    className="
    absolute
    w-80
    h-80
    bg-fuchsia-300/20
    blur-[120px]
    rounded-full
    bottom-0
    right-0
    "
  ></div>

</div>
<div className="absolute top-24 left-10 text-pink-300 text-3xl animate-pulse">
  ✦
</div>

<div className="absolute top-60 right-20 text-fuchsia-300 text-2xl animate-pulse">
  ✧
</div>

<div className="absolute bottom-20 left-24 text-pink-200 text-4xl animate-pulse">
  ✦
</div>
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-pink-500 text-5xl font-bold uppercase tracking-[10px]">
            PROJECTS
          </p>

          <h2 className="mt-5 text-[35px] lg:text-3xl font-extrabold">
            Featured
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Projects
            </span>
          </h2>

          <div className="flex justify-center mt-10">
            <div className="w-28 h-1 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500"></div>
          </div>

          <p className="mt-5 className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto>
            A selection of AI projects showcasing Machine Learning,
            Computer Vision, LLMs, RAG systems, and AI Agents.
          </p>

        </div>
        <div className="grid lg:grid-cols-2 gap-10">
  {projects.map((project, index) => (
    <div
      key={index}
      className="group rounded-[36px] overflow-hidden bg-white/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(236,72,153,.12)] hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="p-6 relative">
        <p
  className="
  absolute
  top-5
  right-6
  text-5xl
  font-black
  text-pink-400
  opacity-30
  select-none
  "
>
  {project.number}
</p>

<h3 className="text-[28px] font-bold className="text-gray-900 dark:text-white mt-2>
  {project.title}
</h3>

<p className="text-gray-500 dark:text-gray-400 mt-2">
  {project.subtitle}
</p>

<p className="mt-3 text-gray-500 dark:text-gray-400 text-sm leading-6">
  {project.description}
</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((item) => (
            <span
  key={item}
  className="
  px-2.5
  py-1
  rounded-full
  bg-pink-50
  text-pink-600
  text-xs
  font-medium
  "
>
  {item}
</span>
          ))}
        </div>

        
<div className="flex gap-4 mt-7">

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
className="
flex-1
flex
items-center
justify-center
gap-2
py-3
rounded-xl
border-2
border-pink-300
font-medium
hover:bg-pink-50
hover:border-pink-500
hover:text-pink-600
hover:scale-105
transition-all
duration-300
"
  >
    <FaGithub className="text-lg" />
    GitHub
  </a>

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="
      flex-1
      flex
      items-center
      justify-center
      gap-2
      py-3
      rounded-xl
      font-medium
      text-white
      bg-gradient-to-r
      from-pink-500
      to-fuchsia-500
      hover:scale-105
      transition-all
      duration-300
      "
    >
      
      🚀 Live Demo
    </a>
  )}

</div>


      </div>
    </div>
  ))}
</div>


{/* Grid */}

</div>   {/* Container */}
</motion.div>
</section>
  );
}

export default Projects;
const projects = [
 {
  number: "01",
  title: "AIOS",
  subtitle: "Multi-Agent Incident Response",
  description:"An AI-powered emergency response system using autonomous agents." ,
  image: aiosCover,

  tech: [
    "Python",
    "Gemini",
    "LangChain",
    "Streamlit",
    "Folium"
  ],

  github: "https://github.com/Meriam-aziz/AIOS-Multi-Agent-System",
  demo: "https://drive.google.com/file/d/1Eq_8w4arit4JJxRbOsqgNIgLLiUPIUfb/view?usp=sharing",
},
  {
    number: "02",
    title: "Deaf AI Chatbot",
    subtitle: "Arabic Sign Language Recognition",
    description:"Recognizes Arabic sign language and converts gestures into text using AI.",
    image: deafCover,
    tech: [
"Python",
"YOLOv8",
"OpenCV",
"Gemini API",
"Streamlit"
],

  github: "https://github.com/Meriam-aziz/DeafBot-AI-Sign-Language-Recognition",
},
  
  {
    number: "03",
    title: "Diabetes Prediction",
    subtitle: "Machine Learning",
    description:"Predicts diabetes risk using machine learning classification models.",
    image: diabetsCover,
    tech: [
"Python",
"Scikit-Learn",
"Pandas",
"NumPy",
"Matplotlib"
],

  github: "https://github.com/Meriam-aziz/Diabetes-Health-Prediction-using-Machine-Learning",
},
 
  {
    number: "04",
    title: "MNIST Recognition",
    subtitle: "Deep Learning",
    description:"Recognizes handwritten digits using deep learning and CNN models.",
    image: mnistCover,
    tech: [
"Python",
"TensorFlow",
"Keras",
"CNN",
"NumPy"
],
 github: "https://github.com/Meriam-aziz/MNIST-Handwritten-Digit-Recognition-with-Deep-Learning",
  },
  {
    number: "05",
    title: "Malicious URL Detection",
    subtitle: "Cyber Security",
    description:"Detects malicious websites using machine learning and NLP techniques.",
    image: urlCover,
    tech: [
"Python",
"Scikit-Learn",
"NLP",
"Pandas",
"Joblib"
],
github: "https://github.com/Meriam-aziz/Malicious-URL-Detection-using-Machine-Learning",
  },
  
  {
    number: "06",
  title: "OCR License Plate Recognition",
  subtitle: "Computer Vision",
  description:"Detects and reads vehicle license plates using OCR and computer vision.",
  image: ocrCover,

  tech: [
    "Python",
    "YOLOv8",
    "OpenCV",
    "OCR",
    "EasyOCR"
  ],

  github: "https://github.com/Meriam-aziz/Vehicle-License-Plate-Recognition-using-OCR",
  
},
];
