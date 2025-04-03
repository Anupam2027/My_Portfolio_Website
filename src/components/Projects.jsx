import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
const projects = [
  {
    id: 1,
    title: "Creative Website",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    id: 2,
    title: "Mobile App Design",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    id: 3,
    title: "Brand Identity",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
];

const Projects = () => {
  return (
    <ScrollAnimation>
      <section id="projects" className="py-20 text-center">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-lg p-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
              <a href={project.link} className="text-blue-500 hover:underline">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Projects;
