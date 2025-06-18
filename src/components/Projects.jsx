import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import project1 from "../assets/projects/personalfinance.png";
import project2 from "../assets/projects/blog.png";
import project3 from "../assets/projects/AcadVault.png";

const projects = [
  {
    title: "Personal Finance Tracker",
    image: project1,
    description:
      "Track income, expenses, and savings with this Firebase-powered app.",
    tags: ["React", "Firebase", "CSS"],
    liveLink: "https://personalfinancetracker01.vercel.app/",
    githubLink: "https://github.com/Anupam2027/Personal-Finance-Tracker",
  },
  {
    title: "Blog Platform",
    image: project2,
    description: "A responsive blog app with Firebase auth and Firestore DB.",
    tags: ["React", "Tailwind", "Firebase"],
    liveLink: "https://doblogging.vercel.app/",
    githubLink: "https://github.com/Anupam2027/Blog_website",
  },
  {
    title: "AcadVault (Final Year Project)",
    image: project3,
    description:
      "DigiLocker-like platform to manage academic records securely.",
    tags: ["Next.js", "MongoDB", "Node.js"],
    liveLink: "https://youracadvault.com",
    githubLink: "https://github.com/souvikkar009/Final-Year-Project",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 blur-lg opacity-20 hover:opacity-40 transition-all duration-300 z-0"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden z-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      🌐 View Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-lg"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
