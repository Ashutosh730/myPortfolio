import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { Section } from "./components/Section";
import {
  projects,
  experiences,
  skills,
  certifications,
  education,
} from "./data";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div
      className={`min-h-screen ${isDark ? "dark bg-gray-900" : "bg-gray-50"}`}
    >
      <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      {/* Hero Section */}
      <Section id="home" title="">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="mb-4"
          >
            <img
              src="/profile-pic_3.png"
              alt="Ashutosh Kumar"
              className="w-64 h-64 rounded-full border-4 shadow-lg"
              style={{ borderColor: "#c29dc2" }}
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="text-4xl md:text-6xl font-bold mb-2 dark:text-white"
          >
            Ashutosh Kumar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl mb-3 text-gray-600 dark:text-gray-300"
          >
            Software Developer | Strategic Thinker | Cross-Functional
            Collaborator
          </motion.p>
          <div className="text-lg md:text-xl text-gray-700 dark:text-gray-200">
            <TypeAnimation
              sequence={[
                "Java Developer",
                1000,
                "Spring Boot Developer",
                1000,
                "Backend Developer",
                1000,
                "Apache Spark Developer",
                1000,
                "Cloud Enthusiast",
                1000,
              ]}
              repeat={Infinity}
            />
          </div>
        </div>
      </Section>

      {/* About Me Section */}
      <Section id="about" title="About Me">
        <motion.div
          className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 p-6 rounded-lg shadow-md"
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          <p className="mb-4">
            I am a passionate Software Developer and Data Engineer with
            expertise in building scalable applications and data processing
            solutions. With a strong foundation in computer science and hands-on
            experience in modern technologies, I strive to create efficient and
            innovative solutions to complex problems.
          </p>
          <p>
            Currently working at Wipro, I specialize in developing robust
            backend services and data processing pipelines using technologies
            like Java, Spring Boot, Apache Spark, and cloud platforms.
          </p>
        </motion.div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience">
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {exp.period}
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <h3 className="text-xl font-bold mb-4 dark:text-white">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications" title="Certifications">
        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3 className="text-lg font-semibold dark:text-white">
                {cert.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Issued: {cert.date}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      {/* <Section id="education" title="Education">
        <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2 dark:text-white">
            {education.degree}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {education.institution}
          </p>
          <p className="text-gray-600 dark:text-gray-400">{education.period}</p>
        </div>
      </Section> */}

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="https://github.com/Ashutosh730"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="text-gray-700 dark:text-gray-300"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ashutosh-kumar-9417341a9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -10 }}
              className="text-gray-700 dark:text-gray-300"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="mailto:ashutoshkr427@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-700 dark:text-gray-300"
            >
              <Mail className="w-8 h-8" />
            </motion.a>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#ff079d" }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1RbQgrxTrSlDafSIKKQk-vNT8ZkH049ri/view?usp=sharing",
                "_blank"
              )
            }
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.button>
        </div>
      </Section>
    </div>
  );
}

export default App;
