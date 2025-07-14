import React from "react";
import { motion } from "framer-motion";
import projects from "../utils/projectData.json";

const ProgressBadge = ({ status }) => {
  const statusConfig = {
    complete: {
      text: "Complete",
      bg: "bg-green-100 dark:bg-green-900",
      textColor: "text-green-800 dark:text-green-200",
      border: "border-green-200 dark:border-green-700"
    },
    working: {
      text: "In Progress",
      bg: "bg-yellow-100 dark:bg-yellow-900",
      textColor: "text-yellow-800 dark:text-yellow-200",
      border: "border-yellow-200 dark:border-yellow-700"
    },
    planned: {
      text: "Planned",
      bg: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-800 dark:text-blue-200",
      border: "border-blue-200 dark:border-blue-700"
    }
  };

  const config = statusConfig[status.toLowerCase()] || statusConfig.complete;

  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${config.bg} ${config.textColor} ${config.border} border`}>
      {config.text}
    </span>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        },
        hover: { y: -5 }
      }}
      whileHover="hover"
      className="group flex flex-col md:flex-row items-stretch bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="md:w-2/5 w-full relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.name}
          className="object-cover w-full h-48 md:h-full group-hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500" />
      </div>
      <div className="flex-1 p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <h1 className="font-bold text-3xl text-gray-800 dark:text-white">
              {project.name}
            </h1>
            <div className="flex gap-2">
              <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full">
                New
              </span>
              <ProgressBadge status={project.progress || "complete"} />
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-xs font-medium bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-700 text-purple-700 dark:text-purple-300 px-3 py-1.5 rounded-full shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        <div>
          <ul className="grid grid-cols-2 gap-2 mb-6 text-sm text-gray-700 dark:text-gray-300">
            {project.features.map((feature, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5 }}
                className="flex items-center bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg"
              >
                <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </motion.li>
            ))}
          </ul>
          <div className="flex gap-4">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </motion.a>
            )}
            {project.liveDemo && (
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-lg ${
                  project.progress === "working" 
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                    : "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                {project.progress === "working" ? "Preview" : "Live Demo"}
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-gradient-to-b from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-purple-600 dark:text-purple-400 mb-2 block">
            MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>
        
        <motion.div
          className="space-y-12"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        
       
      </div>
    </motion.section>
  );
};

export default Projects;