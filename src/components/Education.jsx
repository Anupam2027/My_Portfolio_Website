import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Download } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    institution: "Techno Main Salt Lake",
    year: "August 2022 – July 2025",
    result: "CGPA: 7",
  },
  {
    degree: "Diploma in Computer Science and Technology",
    institution: "Women’s Polytechnic College",
    year: "August 2019 – July 2022",
    result: "CGPA: 8.4",
  },
  {
    degree: "10th Standard",
    institution: "Alipore Takshal Vidyapith For Girls",
    year: "January 2018 – March 2019",
    result: "Percentage: 72.42%",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎓 Education
        </motion.h2>

        <VerticalTimeline lineColor="#6366f1">
          {educationData.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "rgba(99, 102, 241, 0.05)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(99, 102, 241, 0.2)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                borderRadius: "1rem",
                color: "#1f2937",
              }}
              contentArrowStyle={{ borderRight: "7px solid #6366f1" }}
              date={
                <span className="text-white font-semibold">{edu.year}</span>
              }
              iconStyle={{
                background: "rgba(99,102,241,0.15)",
                color: "#6366f1",
                backdropFilter: "blur(4px)",
                boxShadow: "0 4px 12px rgba(99,102,241,0.3)",
              }}
              icon={<School />}
            >
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                {edu.degree}
              </h3>
              <h4 className="text-md font-medium text-gray-700 dark:text-gray-300">
                {edu.institution}
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-300 font-semibold mt-1">
                {edu.result}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {/* Resume Download Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="/Anupam_kumari_resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          >
            <Download size={18} /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
