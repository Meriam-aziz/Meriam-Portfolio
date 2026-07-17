import orangeLogo from "../assets/logos/Orange_logo.webp";
import depiLogo from "../assets/logos/depi.png";
import ntiLogo from "../assets/logos/nti.jfif";
import { motion } from "framer-motion";
function Experience() {
  return (
    <section
  id="experience"
  className="min-h-screen hero-bg pt-32 scroll-mt-28"
>

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
        <div className="absolute top-24 left-10 text-pink-300 text-3xl animate-pulse">
  ✦
</div>

<div className="absolute top-60 right-20 text-fuchsia-300 text-2xl animate-pulse">
  ✧
</div>

<div className="absolute bottom-20 left-24 text-pink-200 text-4xl animate-pulse">
  ✦
</div>
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
      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-pink-500 text-5xl font-bold uppercase tracking-[10px]">
            Experience
          </p>

          <h2 className="mt-5 text-[35px] lg:text-3xl font-extrabold">
            Experience 
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {" "}& Training
            </span>
          </h2>

          <div className="flex justify-center mt-8">
            <div className="w-28 h-1 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500"></div>
          </div>

          <p className="mt-5 text-gray-700 text-lg max-w-2xl mx-auto">
           Hands-on experience gained through internships and AI development programs.
          </p>

        </div>

<div className="relative max-w-4xl mx-auto">

  {/* Vertical Line */}

  <div
    className="
    absolute
    left-[17px]
    top-0
    h-full
    w-0.5
    bg-gradient-to-b
    from-pink-500
    via-fuchsia-500
    to-purple-500
    rounded-full
    "
  ></div>

<div className="relative pl-16 mb-14">

  {/* Circle */}

  <div
  className="
  absolute
  left-2
  top-3
  w-5
  h-5
  rounded-full
  bg-gradient-to-br
  from-pink-500
  to-fuchsia-500
  border-[5px]
  border-white
  shadow-[0_0_18px_rgba(236,72,153,.55)]
  "
></div>

  {/* Card */}

  <div
    className="
glass-card
rounded-3xl
p-6
border
border-pink-100
dark:border-slate-700
shadow-[0_15px_40px_rgba(236,72,153,.12)]
dark:shadow-[0_15px_40px_rgba(0,0,0,.45)]
hover:border-pink-300
dark:hover:border-pink-500
hover:-translate-y-1
hover:scale-[1.01]
hover:shadow-[0_20px_50px_rgba(236,72,153,.18)]
transition-all
duration-500
"
  >

    <div className="flex justify-between items-center">

      <div className="flex items-center gap-3">

  <img
    src={orangeLogo}
    alt="Orange Digital Center Logo"
    className="w-8 h-8 object-contain"
  />

  <h3 className="text-2xl font-bold">
    Orange Digital Center
  </h3>

</div>

      <span
        className="
        py-1.5
        px-3
        text-sm
        rounded-full
        bg-pink-100
        text-pink-600
        font-medium
        "
      >
        Apr 2026 – May 2026
      </span>

    </div>

    <p className="text-lg text-pink-500 font-bold mt-2">
      AI Agent Developer Trainee
    </p>

    <ul className="mt-5 space-y-2 text-gray-700">

      <li>✔ Designed and developed AI agent applications using the Gemini API.</li>

      <li>✔ Built and orchestrated multi-agent workflows using LangChain.</li>

      <li>✔ Developed interactive AI applications with Streamlit.</li>

    
    </ul>
<div className="flex flex-wrap gap-2 mt-6">

  {[
    "Python",
    "Gemini API",
    "LangChain",
    "Streamlit",
    "AI Agents"
  ].map((tech) => (

    <span
      key={tech}
      className="
      px-3
      py-1
      rounded-full
      bg-pink-50
      border
      border-pink-200
      text-pink-600
      text-xs
      font-medium
      "
    >
      {tech}
    </span>

  ))}

</div>

  </div>

</div>


<div className="relative pl-16 mb-14">

  {/* Circle */}

  <div
  className="
  absolute
  left-2
  top-3
  w-5
  h-5
  rounded-full
  bg-gradient-to-br
  from-pink-500
  to-fuchsia-500
  border-[5px]
  border-white
  shadow-[0_0_18px_rgba(236,72,153,.55)]
  "
></div>

  {/* Card */}

  <div
    className="
glass-card
rounded-3xl
p-6
border
border-pink-100
dark:border-slate-700
shadow-[0_15px_40px_rgba(236,72,153,.12)]
dark:shadow-[0_15px_40px_rgba(0,0,0,.45)]
hover:border-pink-300
dark:hover:border-pink-500
hover:-translate-y-1
hover:scale-[1.01]
hover:shadow-[0_20px_50px_rgba(236,72,153,.18)]
transition-all
duration-500
"
  >

    <div className="flex justify-between items-center">

      <div className="flex items-center gap-3">



  <img

    src={depiLogo}

    alt="DEPI Logo" 

    className="w-8 h-8 object-contain"

  />



  <h3 className="text-2xl font-bold">

    Digital Egypt Pioneers Initiative

  </h3>



</div>

      <span
        className="
        px-3
        py-1
        rounded-full
        bg-pink-100
        text-pink-600
        text-sm
        font-medium
        "
      >
        Oct 2024 – May 2025
      </span>

    </div>

    <p className="text-lg text-pink-500 font-bold mt-2">
      Machine Learning Engineer Trainee
    </p>

    <ul className="mt-5 space-y-2 text-gray-700">

      <li>✔ Developed Machine Learning and Deep Learning models.</li>

      <li>✔ Built Computer Vision and Natural Language Processing applications.</li>

      <li>✔ Applied data preprocessing, feature engineering, and model evaluation techniques.</li>

    </ul>

    <div className="flex flex-wrap gap-2 mt-6">

      {[
        "Python",
        "Scikit-Learn",
        "TensorFlow",
        "Machine Learning",
        "Deep Learning"
      ].map((tech) => (

        <span
          key={tech}
          className="
          px-3
          py-1
          rounded-full
          bg-pink-50
          border
          border-pink-200
          text-pink-600
          text-xs
          font-medium
          "
        >
          {tech}
        </span>

      ))}

    </div>

  </div>

</div>


<div className="relative pl-16">

  {/* Circle */}

  <div
  className="
  absolute
  left-2
  top-3
  w-5
  h-5
  rounded-full
  bg-gradient-to-br
  from-pink-500
  to-fuchsia-500
  border-[5px]
  border-white
  shadow-[0_0_18px_rgba(236,72,153,.55)]
  "
></div>

  {/* Card */}

  <div
    className="
glass-card
rounded-3xl
p-6
border
border-pink-100
dark:border-slate-700
shadow-[0_15px_40px_rgba(236,72,153,.12)]
dark:shadow-[0_15px_40px_rgba(0,0,0,.45)]
hover:border-pink-300
dark:hover:border-pink-500
hover:-translate-y-1
hover:scale-[1.01]
hover:shadow-[0_20px_50px_rgba(236,72,153,.18)]
transition-all
duration-500
"
  >

    <div className="flex justify-between items-center">

      <div className="flex items-center gap-3">



  <img

    src={ntiLogo}

    alt="National Telecommunication Institute Logo" 

    className="w-8 h-8 object-contain"

  />



  <h3 className="text-2xl font-bold">

    National Telecommunication Institute

  </h3>



</div>

      <span
        className="
        px-3
        py-1
        rounded-full
        bg-pink-100
        text-pink-600
        text-sm
        font-medium
        "
      >
        Jul 2023
      </span>

    </div>

    <p className="text-lg text-pink-500 font-bold mt-2">
      Artificial Intelligence Trainee
    </p>

    <ul className="mt-5 space-y-2 text-gray-700">

      <li>✔ Studied Machine Learning fundamentals and core AI algorithms.</li>

      <li>✔ Practiced data preprocessing and AI model deployment.</li>

      <li>✔ Completed practical AI projects during the summer training program.</li>

    </ul>

    <div className="flex flex-wrap gap-2 mt-6">

      {[
        "Python",
        "Machine Learning",
        "AI",
        "Data Analysis",
        "Model Deployment"
      ].map((tech) => (

        <span
          key={tech}
          className="
          px-3
          py-1
          rounded-full
          bg-pink-50
          border
          border-pink-200
          text-pink-600
          text-xs
          font-medium
          "
        >
          {tech}
        </span>

      ))}

    </div>

  </div>

</div>

</div>


      </div>
      </motion.div>
    </section>
  );
}

export default Experience;

