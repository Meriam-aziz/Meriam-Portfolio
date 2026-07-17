import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-slate-950">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.1, 1],
          opacity: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 flex items-center justify-center text-white text-3xl font-bold shadow-2xl"
      >
        MA
      </motion.div>
    </div>
  );
}