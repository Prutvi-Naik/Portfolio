import React from "react";
import { motion } from "framer-motion";
const HomePage = () => {
  const homeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      className="bg-white dark:bg-gray-900 transition-colors duration-300 mt20"
      id="home"
    >
      <div className="container mx-auto px-4 py-10 md:py-20">
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={homeVariants}
          transition={{ duration: 0.9 }}
        >
          <div className="w-full md:w-1/2 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-2"
            >
              Hi, I'm <span className="text-indigo-600">Pruthvijit</span>{" "}
              <span className="animate-wiggle inline-block">👋</span>
            </motion.h1>

            <p className="text-xl text-gray-700 dark:text-gray-300">
              Front-End Developer | React Enthusiast
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400">
              I design responsive, modern UIs using React, Tailwind, and motion
              in the same project.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
                React
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-cyan-600 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-700">
                Tailwind
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-yellow-600 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-green-600 dark:text-green-300 border border-green-200 dark:border-green-700">
                APIs
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-zinc-600 dark:text-slate-300 border border-green-200 dark:border-zinc-700">
                JSON
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a BSc Computer Science student passionate about building
              dynamic web experiences. Currently mastering React, Tailwind, and
              JavaScript to create responsive interfaces. I love combining
              functionality with sleek design through motion and API
              integration.
            </p>
<a href="../../img/Pruthvijit_Resume.pdf" target="_blank" rel="noopener noreferrer">
  <button className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
    View Resume
  </button>
</a>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 shadow-lg flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYkMLdoguwCWOMzGfcZsag5Tg-faVAYKVag&s"
                  alt="dev-img"
                  className="h-full"
                />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
