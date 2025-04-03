import { motion } from "framer-motion";

const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ScrollAnimation = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={scrollVariants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
