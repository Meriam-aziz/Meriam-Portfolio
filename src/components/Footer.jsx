import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
   <footer className="relative mt-24 border-t border-pink-100 bg-white/60 backdrop-blur-lg">

      <div className="max-w-screen-xl mx-auto px-6 py-12 text-center">

        <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
          Meriam Aziz
        </h3>

        <p className="mt-3 text-gray-600 dark:text-gray-300">
          AI Engineer 
        </p>

        {/* Social Links */}

        <div className="flex justify-center gap-6 mt-8">

          <a
  href="mailto:Meriamaziz000@gmail.com"
  className="
w-11
h-11
rounded-full
bg-pink-50
dark:bg-slate-800
flex
items-center
justify-center
text-pink-500
hover:bg-pink-500
hover:text-white
transition-all
duration-300
hover:scale-110
"
>
  <MdEmail size={20} />
</a>

          <a
  href="https://www.linkedin.com/in/meriam-aziz/"
  target="_blank"
  rel="noopener noreferrer"
  className="
w-11
h-11
rounded-full
bg-pink-50
dark:bg-slate-800
flex
items-center
justify-center
text-pink-500
hover:bg-pink-500
hover:text-white
transition-all
duration-300
hover:scale-110
"
>
  <FaLinkedinIn size={18} />
</a>

          <a
  href="https://github.com/Meriam-aziz"
  target="_blank"
  rel="noopener noreferrer"
  className="
w-11
h-11
rounded-full
bg-pink-50
dark:bg-slate-800
flex
items-center
justify-center
text-pink-500
hover:bg-pink-500
hover:text-white
transition-all
duration-300
hover:scale-110
"
>
  <FaGithub size={18} />
</a>

        </div>

        <div className="w-24 h-[2px] bg-gradient-to-r from-pink-500 to-fuchsia-500 mx-auto mt-8 rounded-full"></div>

       

        <p className="mt-2 text-gray-400 text-sm">
          Designed & Developed by Meriam Aziz © 2026
        </p>

      </div>

    </footer>
  );
}

export default Footer;