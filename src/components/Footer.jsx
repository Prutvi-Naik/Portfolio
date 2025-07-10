import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{delay:1}}
          exit={{ opacity: 0 }}
          aria-label="Back to top"
        >
          <FaArrowUp className="h-5 w-5" />
        </motion.button>
      )}

      {/* Main Footer */}
      <motion.footer
        className="w-full bg-gray-100 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
        transition={{ duration: 0.9 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sticky bottom-0">
          {/* Mobile-Centered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Copyright - Centered on mobile */}
            <motion.div 
              className="flex flex-col items-center md:items-start"
              variants={footerVariants}
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200">
                Pruthvijit Naiknaware
              </h3>
              <p className="text-gray-600 dark:text-slate-400">
                © {currentYear} All rights reserved.
              </p>
              <p className="text-sm text-gray-500 dark:text-slate-500 mt-2">
                Made with ❤️ using React + Tailwind
              </p>
            </motion.div>

            {/* Quick Links - Centered on mobile */}
            <motion.div 
              className="flex flex-col items-center md:items-start"
              variants={footerVariants}
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-2">
                Quick Links
              </h3>
              <nav className="flex flex-col ">
                {['Home', 'About', 'Projects', 'Real-Time','Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-300 transition-colors px-2 rounded hover:bg-gray-200 dark:hover:bg-slate-800"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Social Links - Centered on mobile */}
            <motion.div 
              className="flex flex-col items-center md:items-start"
              variants={footerVariants}
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-2">
                Connect
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: <FaGithub className="h-6 w-6" />, label: "GitHub", url: "https://github.com/Prutvi-Naik" },
                  { icon: <FaLinkedin className="h-6 w-6" />, label: "LinkedIn",url:"https://www.linkedin.com/in/pruthvijit-naiknaware-42ba94369/" },
                  { icon: <FaInstagram className="h-6 w-6" />, label: "Instagram", url:"https://www.instagram.com/x_omya_x_29/" },
                  { icon: <HiMail className="h-6 w-6" />, label: "Email" , url: "mailto:Pruthnaik25@gmail.com"}
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    className="text-gray-600 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-300 transition-colors p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Centered on mobile */}
          <motion.div 
            className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center text-center md:text-left"
            variants={footerVariants}
          >
            <div className="text-sm text-gray-500 dark:text-slate-500 mb-3 md:mb-0">
              <a  className="hover:underline mx-2">Privacy Policy</a>
              <a  className="hover:underline mx-2">Terms of Service</a>
            </div>
            <div className="text-sm text-gray-500 dark:text-slate-500">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;