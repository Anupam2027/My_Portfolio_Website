import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gray-200 dark:bg-gray-900 py-10 shadow-inner z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0"
      >
        {/* Left Section */}
        <div>
          <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            © {new Date().getFullYear()} Anupam Kumari Mishra. All rights
            reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-lg text-gray-600 dark:text-gray-300">
          <a
            href="https://github.com/Anupam2027"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anupamkumari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Miss__anupam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300"
        >
          ↑ Back to Top
        </button>
      </motion.div>
    </footer>
  );
};

export default Footer;
