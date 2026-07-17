import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .8 }}
      className="
      fixed
      inset-0
      z-[9999]
      bg-white
      dark:bg-slate-950
      flex
      items-center
      justify-center
      "
    >
      <motion.h1
        initial={{ scale: .8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: .8
        }}
        className="
        text-5xl
        font-black
        bg-gradient-to-r
        from-pink-500
        to-fuchsia-500
        bg-clip-text
        text-transparent
        "
      >
        M.A
      </motion.h1>
    </motion.div>
  );
}

export default LoadingScreen;