import { motion } from "framer-motion";
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
    link: "https://yourprojectlink.com",
  },
  {
    title: "Blog Platform",
    image: project2,
    description: "A responsive blog app with Firebase auth and Firestore DB.",
    tags: ["React", "Tailwind", "Firebase"],
    link: "https://yourblogproject.com",
  },
  {
    title: "AcadVault (Final Year Project)",
    image: project3,
    description:
      "DigiLocker-like platform to manage academic records securely.",
    tags: ["Next.js", "MongoDB", "Node.js"],
    link: "https://youracadvault.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-white dark:bg-gray-900 transition duration-300"
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
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 blur-lg opacity-20 hover:opacity-60 transition-all duration-300 z-0"></div>

              {/* Shadow Under Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden z-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    View Project →
                  </a>
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
