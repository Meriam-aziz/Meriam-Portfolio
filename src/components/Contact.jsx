import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

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
      .then(() => {
        alert("Message sent successfully! ✨");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  const contacts = [
    {
      icon: <MdEmail size={24} />,
      title: "Email",
      value: "Meriamaziz000@gmail.com",
      link: "mailto:Meriamaziz000@gmail.com",
    },

    {
      icon: <MdPhone size={24} />,
      title: "Phone",
      value: "+20 1208140650",
      link: "tel:+201208140650",
    },

    {
      icon: <MdLocationOn size={24} />,
      title: "Location",
      value: "Ismailia, Egypt",
      link: "#",
    },

    {
      icon: <FaLinkedinIn size={22} />,
      title: "LinkedIn",
      value: "linkedin.com/in/meriam-aziz",
      link: "https://linkedin.com/in/meriam-aziz",
    },

    {
      icon: <FaGithub size={22} />,
      title: "GitHub",
      value: "github.com/Meriam-aziz",
      link: "https://github.com/Meriam-aziz",
    },
  ];

  return (
    <section
      id="contact"
      
      className="min-h-screen hero-bg pt-32 pb-20"
    >
      <div className="absolute top-20 left-10 text-pink-300 text-4xl animate-pulse">
✦
</div>

<div className="absolute top-44 right-28 text-fuchsia-300 text-3xl animate-float">
✧
</div>

<div className="absolute bottom-28 left-40 text-pink-200 text-5xl animate-pulse">
✦
</div>

<div className="absolute bottom-16 right-20 text-pink-300 text-3xl animate-float">
✧
</div>

<div className="absolute top-1/3 left-20 w-3 h-3 rounded-full bg-pink-300 animate-ping"></div>

<div className="absolute top-2/3 right-36 w-2 h-2 rounded-full bg-fuchsia-400 animate-bounce"></div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 -mt-10">
{/* Floating Stars */}

<div className="absolute top-16 left-20 text-pink-300 text-4xl animate-pulse">
✦
</div>

<div className="absolute top-44 left-56 text-fuchsia-300 text-2xl animate-float">
✧
</div>

<div className="absolute top-24 right-32 text-pink-300 text-3xl animate-pulse">
✦
</div>

<div className="absolute top-72 right-16 text-pink-200 text-4xl animate-float">
✧
</div>

<div className="absolute bottom-36 left-12 text-pink-300 text-3xl animate-pulse">
✦
</div>

<div className="absolute bottom-20 right-44 text-fuchsia-300 text-2xl animate-float">
✦
</div>

<div className="absolute top-1/2 left-5 w-3 h-3 rounded-full bg-pink-300 animate-ping"></div>

<div className="absolute top-1/3 right-5 w-2 h-2 rounded-full bg-fuchsia-400 animate-bounce"></div>
  <p className="text-pink-500 text-6xl lg:text-6xl font-extrabold uppercase tracking-[12px]">
    Contact
  </p>

  <h2 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white">
    Let's{" "}
    <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
      Work Together
    </span>
  </h2>
  <div className="flex justify-center mt-5 mb-5">
  <div className="w-28 h-1 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500"></div>
</div>

  <p className="mt-5 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
    Whether you have a project, internship opportunity, or just want to connect,
    feel free to reach out.
  </p>

</div>

<div className="grid lg:grid-cols-5 gap-5 mb-16">

  {contacts.map((item, index) => (

    <motion.a
  key={index}
  href={item.link}
  target="_blank"
  rel="noreferrer"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.5,
    delay: index * 0.08,
  }}
  className="
  group
  glass-card
  rounded-3xl
  p-6
  text-center
  border
  border-pink-100
  dark:border-slate-700
  hover:border-pink-300
  hover:-translate-y-2
  hover:shadow-xl
  transition-all
  duration-300
  "
>

<div
  className="
  flex
  justify-center
  text-pink-500
  mb-4
  text-2xl
  transition-all
  duration-300
  group-hover:scale-125
  group-hover:rotate-12
  "
>
  {item.icon}
</div>

<h3 className="font-bold text-lg text-gray-900 dark:text-white">
  {item.title}
</h3>

<p className="mt-2 text-sm text-gray-500 dark:text-gray-400 break-words">
  {item.value}
</p>

</motion.a>

  ))}

</div>
<div className="max-w-3xl mx-auto">

<motion.div
  initial={{ opacity: 0, scale: .95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: .6 }}
  className="
  relative
  rounded-[40px]
  bg-white/80
  dark:bg-slate-900/80
  backdrop-blur-xl
  border
  border-pink-200/50
  dark:border-slate-700
  shadow-[0_20px_60px_rgba(236,72,153,.15)]
  p-10
  overflow-hidden
  "
>

  {/* Glow */}
  <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-pink-400/20 via-fuchsia-300/20 to-purple-300/20 blur-xl -z-10"></div>

  {/* Stars */}
  <div className="absolute -top-5 -left-5 text-pink-400 text-4xl animate-float">✦</div>

  <div className="absolute top-6 right-6 text-fuchsia-400 text-xl animate-pulse">✦</div>

  <div className="absolute bottom-10 -right-5 text-pink-300 text-5xl animate-float">✧</div>

  <div className="absolute bottom-5 left-8 text-pink-200 text-2xl animate-pulse">✦</div>

<motion.h3
initial={{ opacity:0, y:20 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:.5 }}
className="text-3xl font-bold text-gray-900 dark:text-white"
>
  Send Message
</motion.h3>

<motion.p
initial={{ opacity:0 }}
whileInView={{ opacity:1 }}
transition={{ delay:.2 }}
className="mt-3 text-gray-600 dark:text-gray-300"
>
  Fill out the form below and I'll get back to you as soon as possible.
</motion.p>

<form
  ref={form}
  onSubmit={sendEmail}
  className="mt-8 space-y-5"
>

  <input
    type="text"
    name="name"
    placeholder="Full Name"
    className="
    w-full
    rounded-2xl
    border border-pink-100
    bg-white
    px-5 py-4
    shadow-md
    outline-none
    transition-all duration-300
    hover:border-pink-300
    hover:shadow-pink-100
    focus:border-pink-400
    focus:ring-4
    focus:ring-pink-100
    "
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    className="
    w-full
    rounded-2xl
    border border-pink-100
    bg-white
    px-5 py-4
    shadow-md
    outline-none
    transition-all duration-300
    hover:border-pink-300
    hover:shadow-pink-100
    focus:border-pink-400
    focus:ring-4
    focus:ring-pink-100
    "
  />

  <input
    type="text"
    name="title"
    placeholder="Subject"
    className="
    w-full
    rounded-2xl
    border border-pink-100
    bg-white
    px-5 py-4
    shadow-md
    outline-none
    transition-all duration-300
    hover:border-pink-300
    hover:shadow-pink-100
    focus:border-pink-400
    focus:ring-4
    focus:ring-pink-100
    "
  />

  <textarea
  rows={5}
  name="message"
  placeholder="Tell me about your project..."
  className="
  w-full
  rounded-2xl
  border border-pink-100
  bg-white
  px-5 py-4
  shadow-md
  resize-none
  outline-none
  transition-all duration-300
  hover:border-pink-300
  hover:shadow-pink-100
  focus:border-pink-400
  focus:ring-4
  focus:ring-pink-100
  "
>

</textarea>
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
  transition-all
  duration-300
hover:scale-105
active:scale-95
  hover:-translate-y-1
  hover:shadow-[0_15px_40px_rgba(236,72,153,.45)]
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
  />
</button>

<p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
  I usually reply within 24 hours ✨
</p>

</form>

</motion.div>

</div>   {/* max-w-3xl */}

</div>   {/* max-w-7xl */}

</motion.div>

</section>
  );
}

export default Contact;