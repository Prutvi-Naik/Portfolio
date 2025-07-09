"use client"

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import {  AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || 
           (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Real-Time', href: '#realtime' },
    { name: 'Contact', href: '#contact' },
  ];

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  // Close menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              🧑 Pruthvijit.Dev
            </span>
          </Link>

          <div className="flex items-center gap-4 ">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-300" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-sm scroll-smooth font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div
                animate={isMenuOpen ? "open" : "closed"}
                className="relative w-6 h-6"
              >
               ≡
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Framer Motion */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
              ref={containerRef}
            >
              <motion.ul 
                className="flex flex-col space-y-2 py-4"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {navLinks.map((link,) => (
                  <motion.li
                    key={link.name}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      to={link.path}
                      className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;