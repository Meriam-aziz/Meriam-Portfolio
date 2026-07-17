function Education() {
  return (
    <section
      id="education"
      className="min-h-screen hero-bg pt-32"
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
<div className="absolute top-44 right-36 w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>

<div className="absolute bottom-40 left-40 w-2 h-2 bg-fuchsia-300 rounded-full animate-ping"></div>
      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="text-pink-500 text-5xl font-bold uppercase tracking-[10px]">
            EDUCATION
          </p>

          <h2 className="mt-5 text-[35px] lg:text-3xl font-extrabold">
            Academic
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Journey
            </span>
          </h2>

          <div className="flex justify-center mt-10">
            <div className="w-28 h-1 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500"></div>
          </div>

          <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            My educational background and academic achievements in Artificial Intelligence.
          </p>

        </div>

<div className="max-w-3xl mx-auto">

  {/* Degree Card */}

 

<div
  className="
  glass-card
  rounded-[36px]
  p-6
  shadow-[0_15px_40px_rgba(236,72,153,.12)]
  dark:shadow-[0_15px_40px_rgba(0,0,0,.45)]
  hover:-translate-y-2
  hover:shadow-[0_25px_60px_rgba(236,72,153,.18)]
  transition-all
  duration-500
  "
>

  {/* Degree */}

  <div className="text-center">

    <div className="text-5xl mb-6">
      🎓
    </div>

    <h3 className="text-[32px] font-bold className="text-gray-900 dark:text-white>
      B.Sc. in Information Technology
      <br />
      and Computer Science
    </h3>

    <span
className="
inline-block
mt-5
px-5
py-2
rounded-full
bg-pink-100
text-pink-600
text-sm font-semibold
"
>
Artificial Intelligence Major
</span>

  </div>

  {/* University */}

  <div className="mt-8 text-center">

    <p className="text-xl font-semibold text-gray-800">
      The Egyptian E-Learning University (EELU)
    </p>

    <p className="text-gray-500 dark:text-gray-400 mt-2">
      Suez Canal Branch
    </p>

  </div>


{/* Date + GPA */}

<div className="flex justify-between items-center mt-3">

  <span className="text-gray-500 dark:text-gray-400 font-medium">
   📅 2021 — 2025
  </span>

  <span
    className="
    px-2.5
    py-1
    rounded-full
    bg-pink-100
    text-pink-600
    font-semibold
    "
  >
    GPA • 3.25
  </span>

</div>


<hr className="my-7 border-pink-200" />


{/* Graduation Project */}

<div>

  <div className="flex justify-between items-center">

    <h3 className="text-2xl font-bold text-yellow-600">
      🏆 Graduation Project
    </h3>

    <span
      className="
      px-2.5
      py-1
      rounded-full
      bg-yellow-100
      text-yellow-700
      font-bold
      "
    >
     Final Grade: A+
    </span>

  </div>

  <h4 className="mt-5 text-2xl font-bold className="className="text-gray-900 dark:text-white" dark:text-white>
    Deaf AI Chatbot
  </h4>

  <p
  className="mt-3 text-gray-600 dark:text-gray-300 text-[15px] leading-7"
>

    AI-powered Arabic Sign Language Recognition
using YOLOv8 and Gemini API to bridge
communication between deaf and hearing users.
  </p>
  <hr className="my-7 border-pink-200" />
<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
  Core AI Coursework
</h3>

<div className="flex flex-wrap justify-center gap-3">

  {[
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Image Processing",
  ].map((course) => (

    <span
      key={course}
      className="
px-2.5
py-1
rounded-full
bg-pink-50
border
border-pink-200
text-pink-600
font-medium
"
    >
      {course}
    </span>

  ))}
<div className="h-2"></div>
</div>

</div>





  </div>



</div>



</div>


    </section>
  );
}

export default Education;

