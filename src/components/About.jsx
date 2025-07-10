import React from "react";
import { motion } from "framer-motion";
import { GiSkills } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiVite, SiJavascript, SiTailwindcss, SiHtml5, SiCss3, SiFramer } from "react-icons/si";

const About = () => {
  const aboutVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={aboutVariants}
      transition={{ duration: 1 }}
      className=" bg-white dark:bg-gray-900 transition-colors duration-300 pb-3.5"
      id="about"
    >
      {" "}
      <div className="container mx-auto px-4 ">
        <div className="text-4xl font-bold flex justify-center  items-center text-indigo-600">
          About Me{" "}
          <span className="ml-2 text-7xl">
            <IoIosContact />
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center">
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-4xl mx-auto my-8 px-8 py-6 bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg border-l-4 border-blue-500 dark:border-purple-500 rounded-2xl shadow-xl text-gray-800 dark:text-gray-200"
>
  <motion.p
    initial={{ x: -20 }}
    animate={{ x: 0 }}
    transition={{ delay: 0.2 }}
    className="text-lg italic leading-relaxed font-light"
  >
“I'm <span className="font-medium text-blue-600 dark:text-purple-400">Pruthvijit</span>, a passionate front-end developer from Maharashtra, India. I specialize in building clean, responsive UIs with React, Tailwind, and a touch of animation. Currently, I'm actively seeking frontend opportunities while expanding my portfolio with real-world projects to demonstrate my problem-solving and technical skills.”  </motion.p>
</motion.div>

<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ 
    duration: 0.8,
    type: "spring",
    bounce: 0.4
  }}
  className="max-w-4xl mx-auto my-8 px-8 py-6 bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg border-l-4 border-blue-500 dark:border-purple-500 rounded-2xl shadow-xl text-gray-800 dark:text-gray-200"
>
  <div className="flex items-center gap-3 mb-5">
    <motion.div
      whileHover={{ rotate: 15 }}
      transition={{ type: "spring" }}
    >
      <GiSkills className="text-3xl text-blue-600 dark:text-purple-400" />
    </motion.div>
    <motion.h3 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
    >
      Skills
    </motion.h3>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Frontend */}
    <motion.div
      whileHover={{ y: -5 }}
      className="p-4 bg-blue-50/60 dark:bg-gray-800 rounded-xl"
    >
      <h4 className="font-medium mb-3 flex items-center gap-2 text-lg">
        <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
        Frontend
      </h4>
      <ul className="space-y-3">
        {[
          { icon: <FaReact className="text-blue-500" />, name: "React" },
          { icon: <SiVite className="text-purple-500" />, name: "Vite" },
          { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
          { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
          { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
          { icon: <SiCss3 className="text-blue-400" />, name: "CSS3" }
        ].map((skill, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
            className="flex items-center gap-3 px-3 py-2 bg-white dark:bg-gray-700/50 rounded-lg shadow-sm"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* UI Libraries */}
    <motion.div
      whileHover={{ y: -5 }}
      className="p-4 bg-green-50/60 dark:bg-gray-800 rounded-xl"
    >
      <h4 className="font-medium mb-3 flex items-center gap-2 text-lg">
        <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
        UI Libraries
      </h4>
      <ul className="space-y-3">
        {[
          { icon: <SiFramer className="text-blue-400" />, name: "Framer Motion" },
          { icon: "🎤", name: "Web Speech API" },
          { icon: "📦", name: "JSON" }
        ].map((skill, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * i }}
            className="flex items-center gap-3 px-3 py-2 bg-white dark:bg-gray-700/50 rounded-lg shadow-sm"
          >
            <span className="text-xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* Tools & Platforms */}
    <motion.div
      whileHover={{ y: -5 }}
      className="p-4 bg-purple-50/60 dark:bg-gray-800 rounded-xl"
    >
      <h4 className="font-medium mb-3 flex items-center gap-2 text-lg">
        <span className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></span>
        Tools & Platforms
      </h4>
      <ul className="space-y-3">
        {[
          { icon: <FaGithub className="text-gray-800 dark:text-gray-200" />, name: "GitHub" },
          { icon: "🚀", name: "Netlify" },
          { icon: "🔌", name: "APIs Integration" },
          { icon: "🎯", name: "Spotify API" },
          { icon: "🍔", name: "Swiggy API" },
          { icon: "🎬", name: "TMDB API" }
        ].map((skill, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * i }}
            className="flex items-center gap-3 px-3 py-2 bg-white dark:bg-gray-700/50 rounded-lg shadow-sm"
          >
            <span className="text-xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </div>
</motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
