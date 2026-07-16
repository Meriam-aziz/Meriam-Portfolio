import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ol7ec5a",
        "template_on0hqj9",
        form.current,
        "y26A3zJNCt6pUm6w6"
      )
      .then(
        () => {
          alert("Message sent successfully! ✨");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <section
  id="contact"
  className="min-h-screen hero-bg pt-32"

>

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
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
</div>
      <div className="relative max-w-screen-xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-pink-500 text-5xl font-bold uppercase tracking-[10px]">
            CONTACT
          </p>

          <h2 className="mt-5 text-[35px] lg:text-3xl font-extrabold">
            Let's
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Work Together
            </span>
          </h2>

          <div className="flex justify-center mt-8">
            <div className="w-28 h-1 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500"></div>
          </div>

          <p className="mt-3 className="text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto>
            I'm always open to discussing AI projects,
    internships, collaborations,
    or simply connecting with fellow developers.
          </p>

        </div>

        {/* Main Grid */}

        <div className="space-y-15">

          {/* Left Card */}

          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

  <div className="mt-1 flex flex-wrap justify-center gap-6">

  {/* Email */}
  <a
    href="mailto:Meriamaziz000@gmail.com"
    className="
    flex items-center gap-3
    bg-white/70
    border border-pink-100
    rounded-2xl
    px-5 py-4
    shadow-sm
    hover:shadow-xl
    hover:-translate-y-1
    transition-all duration-300
    "
  >
    <span
className="
text-xl
transition-all
duration-300
group-hover:scale-125
group-hover:rotate-12
">
📧
</span>
    <span className="font-medium text-gray-800">
  Meriamaziz000@gmail.com
</span>
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/meriam-aziz"
    target="_blank"
    className="
    flex items-center gap-3
    bg-white/70
    border border-pink-100
    rounded-2xl
    px-5 py-4
    shadow-sm
    hover:shadow-xl
    hover:-translate-y-1
    transition-all duration-300
    "
  >
    <span className="text-xl">💼</span>
    <span className="font-medium text-gray-800">

    linkedin.com/in/meriam-aziz

  </span>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/Meriam-aziz"
    target="_blank"
    className="
    flex items-center gap-3
    bg-white/70
    border border-pink-100
    rounded-2xl
    px-5 py-4
    shadow-sm
    hover:shadow-xl
    hover:-translate-y-1
    transition-all duration-300
    "
  >
    <span className="text-xl">💻</span>
   <span className="font-medium text-gray-800">

    github.com/Meriam-aziz  </span>
  </a>

  {/* Location */}
  <div
    className="
    flex items-center gap-3
    bg-white/70
    border border-pink-100
    rounded-2xl
    px-5 py-4
    shadow-sm
    "
  >
    <span className="text-xl">📍</span>
    <span className="font-medium text-gray-800">

    Ismailia, Egypt  </span>
  </div>

</div>

</div> {/* End Left Side */}

<div className="flex justify-center mt-16">
{/* Right Card */}

          <div
  className="
  glass-card
relative
max-w-xl
w-full
mx-auto
rounded-[38px]
p-8
shadow-[0_15px_45px_rgba(236,72,153,.15)]
overflow-hidden
transition-all
duration-500
hover:-translate-y-2
hover:shadow-[0_25px_70px_rgba(236,72,153,.25)]
duration-300
hover:-translate-y-0.5
"
>
    {/* Glow */}

<div className="absolute inset-0 rounded-[38px] border-2 border-pink-300/40 pointer-events-none"></div>

<div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-pink-400/20 via-fuchsia-300/20 to-purple-300/20 blur-xl -z-10"></div>
            <div className="absolute -top-5 -left-5 text-pink-400 text-4xl animate-float hover:rotate-12 hover:scale-125 duration-300 cursor-pointer">
✦
</div>

<div className="absolute top-6 right-6 text-fuchsia-400 text-xl animate-pulse hover:scale-125 duration-300 cursor-pointer">
✦
</div>

<div className="absolute bottom-10 -right-5 text-pink-300 text-5xl animate-float hover:rotate-45 hover:scale-125 duration-300 cursor-pointer">
✧
</div>

<div className="absolute bottom-5 left-8 text-pink-200 text-2xl animate-pulse hover:scale-125 duration-300 cursor-pointer">
✦
</div>
{/* floating stars */}

<div className="
absolute
top-6
left-10
text-pink-400
text-xl
animate-float
cursor-pointer
transition-all
duration-300
hover:scale-150
hover:rotate-45
hover:text-fuchsia-500
">
 ✦
</div>

<div className="absolute top-20 right-10 text-fuchsia-400 text-2xl animate-pulse">
 ✦
</div>

<div className="absolute bottom-24 left-8 text-pink-300 text-3xl animate-float">
 ✧
</div>

<div className="absolute bottom-8 right-8 text-pink-300 text-xl animate-pulse">
 ✦
</div>

<div className="absolute top-1/2 -left-4 w-3 h-3 bg-pink-300 rounded-full animate-ping"></div>

<div className="absolute top-12 -right-3 w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce"></div>
            <h3 className="text-3xl font-bold className="text-gray-900 dark:text-white>
  Send Message
</h3>

<p className="mt-3 className="text-gray-600 dark:text-gray-300>
  Fill out the form below and I'll get back to you as soon as possible.
</p>

<form
  ref={form}
  onSubmit={sendEmail}
  className="mt-8 space-y-4"
>

  <input
    type="text"
     name="name"
    placeholder="Full Name"
    className="
    w-full
    rounded-2xl
    border
border-pink-100
bg-white
shadow-md
hover:shadow-pink-100
focus:shadow-lg
focus:shadow-pink-100
    px-5
    py-4
    outline-none
    focus:border-pink-400
focus:ring-4
focus:ring-pink-100
    transition
    duration-300
hover:-translate-y-0.5
hover:scale-105
hover:border-pink-300
hover:bg-white

    "
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    className="
    w-full
    rounded-2xl
    border
border-pink-100
bg-white
shadow-md
hover:shadow-pink-100
    focus:shadow-lg
focus:shadow-pink-100
    px-5
    py-4
    outline-none
   focus:border-pink-400
focus:ring-4
focus:ring-pink-100
    transition
    duration-300
hover:-translate-y-0.5
hover:border-pink-300
hover:bg-white
hover:scale-105
    "
  />

  <input
    type="text"
     name="title"
    placeholder="Subject"
    className="
    w-full
    rounded-2xl
    border
border-pink-100
bg-white
shadow-md
hover:shadow-pink-100
focus:shadow-lg
focus:shadow-pink-100
    px-5
    py-4
    outline-none
    focus:border-pink-400
focus:ring-4
focus:ring-pink-100
    transition
    duration-300
hover:-translate-y-0.5
hover:scale-105
hover:border-pink-300
hover:bg-white
    "
  />

  <textarea
  name="message"
    rows={5}
    placeholder="Tell me about your project..."
    className="
    w-full
    rounded-2xl
    border
border-pink-100
bg-white
shadow-md
hover:shadow-pink-100
    focus:shadow-lg
focus:shadow-pink-100
    px-5
    py-4
    outline-none
    resize-none
    focus:border-pink-400
focus:ring-4
focus:ring-pink-100
    transition
    duration-300
hover:-translate-y-0.5
hover:border-pink-300
hover:bg-white
hover:scale-105
    "
  ></textarea>

  <button
    type="submit"
    className="
    relative
overflow-hidden
w-full
    py-4
    rounded-2xl
    text-white
    font-semibold
    bg-gradient-to-r
    from-pink-500
    to-fuchsia-500
    hover:scale-[1.02]
    transition-all
    duration-300
    hover:shadow-[0_10px_35px_rgba(236,72,153,.45)]
hover:-translate-y-1
active:scale-95
hover:shadow-pink-200
duration-300
hover:-translate-y-0.5
    "
  >
   <span className="relative z-10">
  Send Message ✨
</span>

<div
  className="
  absolute
  inset-y-0
  -left-20
  w-16
  rotate-12
  bg-white/30
  blur-md
  animate-shine
  "
></div>

  </button>
<p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
I usually reply within 24 hours ✨
</p>
</form>

</div> {/* End Right Side */}

</div> {/* End flex justify-center */}

</div> {/* space-y-15 */}

</div> {/* End Container */}
</motion.div>
</section>
  );
}
export default Contact;