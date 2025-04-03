import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-extrabold">
        Hello, I'm Anupam Kumari Mishra
      </h1>
      <p className="text-lg text-gray-500 mt-2">I am a frontend developer</p>
    </motion.section>
  );
};

export default Hero;
