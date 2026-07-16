import { motion } from "framer-motion";
function Certifications() {
  const certificates = [
    {
      title: "AI Agent Developer ",
      organization: "Orange Digital Center",
      year: "2026",
      icon: "🤖",
    },
    {
      title: "Machine Learning Engineer",
      organization: "Digital Egypt Pioneers Initiative (DEPI)",
      year: "2025",
      icon: "🧠",
    },
    {
      title: "Microsoft Machine Learning",
      organization: "Microsoft",
      year: "2025",
      icon: "💻",
    },
  
    {
      title: "IEEE AI Bootcamp",
      organization: "IEEE",
      year: "2024",
      icon: "⚡",
    },
    {
      title: "Artificial Intelligence Training",
      organization: "National Telecommunication Institute (NTI)",
      year: "2023",
      icon: "🎓",
    },
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen hero-bg pt-32 scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto px-6">
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center mb-16"
>

          <p className="text-pink-500 text-5xl font-bold tracking-[10px]">
            CERTIFICATIONS
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            My
            <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              {" "}Certificates
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-fuchsia-500 mx-auto rounded-full mt-6"></div>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((item, index) => (

<motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.5,
    delay: index * 0.15,
  }}
  className="
    glass-card
    rounded-3xl
    p-7
    shadow-md
    hover:shadow-xl
    hover:-translate-y-2
    transition-all duration-300
  "
>

  <div className="text-4xl">
    {item.icon}
  </div>

  <h3 className="mt-5 text-xl font-bold">
    {item.title}
  </h3>

  <p className="mt-2 text-pink-500 font-medium">
    {item.organization}
  </p>

  <p className="mt-2 text-gray-500 dark:text-gray-400">
    {item.year}
  </p>

</motion.div>

))}
</div>   

</div>   

</section>
  );
}

export default Certifications;