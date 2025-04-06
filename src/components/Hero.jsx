import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const fullName = "Anupam Kumari Mishra";
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1e24gy8Qgt0sxvptCn2iLLEDEtSpVdz5R";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(typing);
    }, 150);

    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typing);
      clearInterval(cursorBlink);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white via-blue-50 to-sky-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white"
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, I'm{" "}
        <span className="text-blue-600 dark:text-blue-400">
          {text}
          {showCursor && <span className="animate-pulse">|</span>}
        </span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl mt-4 max-w-xl text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        A Passionate Web Developer focused on building modern, smooth, and
        scalable user interfaces with{" "}
        <span className="text-blue-600 font-semibold">React</span> and{" "}
        <span className="text-emerald-500 font-semibold">Firebase</span>.
      </motion.p>

      <motion.div
        className="mt-10 flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href={resumeLink}
          download
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-md transition-all duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
