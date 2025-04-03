import { motion } from "framer-motion";

const ResumeDownload = () => {
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1e24gy8Qgt0sxvptCn2iLLEDEtSpVdz5R";

  https: return (
    <motion.a
      href={resumeLink}
      download="My_Resume.pdf"
      className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md text-lg font-semibold hover:bg-blue-600 transition-all"
      whileHover={{ scale: 1.1 }}
    >
      Download Resume
    </motion.a>
  );
};

export default ResumeDownload;
