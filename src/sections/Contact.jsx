
function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 hero-bg"
    >
      <div className="max-w-7xl mx-auto px-6">

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

          <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Have an AI project, collaboration, or opportunity?
            I'd love to hear from you.
          </p>

        </div>

        {/* Grid */}

        <div className="space-y-20">

          {/* Left Card */}

          <div
            className="
            rounded-[36px]
            bg-white/80
dark:bg-slate-900/70
            backdrop-blur-xl
            border
border-pink-100
dark:border-slate-700
            p-10
            shadow-[0_15px_40px_rgba(236,72,153,.12)]
            dark:shadow-[0_15px_40px_rgba(0,0,0,.45)]
            "
          >

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Let's Connect
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
              internships, full-time opportunities,
              or simply connecting with fellow developers.
            </p>

          </div>

          {/* Right Card */}

          <div
            className="
            rounded-[36px]
            bg-white/80
dark:bg-slate-900/70
            backdrop-blur-xl
            border
border-pink-100
dark:border-slate-700
            p-10
            shadow-[0_15px_40px_rgba(236,72,153,.12)]
            dark:shadow-[0_15px_40px_rgba(0,0,0,.45)]
            "
          >

           <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Send Message
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Available for freelance, internships, AI collaborations, and full-time opportunities.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;