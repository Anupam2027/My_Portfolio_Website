import { motion } from "framer-motion";

// Skill Images
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import react from "../assets/skills/react.png";
import git from "../assets/skills/git.png";
import c from "../assets/skills/c.png";

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "C++", icon: c },
  { name: "Git", icon: git },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 bg-gray-100 dark:bg-gray-800 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-20 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
      <div className="absolute top-20 right-0 w-80 h-80 bg-violet-300 dark:bg-violet-600 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 left-1/2 w-80 h-80 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Bio */}
        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hi! I’m{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Anupam Kumari Mishra
          </span>
          , a frontend developer passionate about building beautiful,
          responsive, and modern web applications using React, Tailwind CSS, and
          Firebase.
        </motion.p>

        {/* Image */}
        <motion.img
          src="https://avatars.githubusercontent.com/u/131358927?v=4"
          alt="Anupam"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-400 dark:border-blue-600"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Skills */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              {/* Glow Effect Behind Card */}
              <div className="absolute inset-0 rounded-xl bg-pink-400 dark:bg-pink-600 blur-lg opacity-20 hover:opacity-60 transition duration-300 z-0"></div>

              {/* Skill Card with Shadow */}
              <div className="relative flex flex-col items-center bg-white dark:bg-gray-700 p-4 rounded-xl shadow-xl z-10">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 mb-2 transition duration-300 hover:scale-110"
                />
                <p className="text-sm font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
