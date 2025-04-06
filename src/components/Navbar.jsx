import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
      });
      
      useEffect(() => {
        const root = document.documentElement;
      
        if (darkMode) {
          root.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          root.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [darkMode]);
      

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="w-full shadow-md bg-white dark:bg-gray-900 fixed top-0 left-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Anupam
        </h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleDarkMode}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl text-gray-800 dark:text-white focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3 bg-white dark:bg-gray-900 transition-all duration-300">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={toggleMenu}
                className="block text-gray-800 dark:text-white font-medium"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                toggleDarkMode();
                toggleMenu(); // Optional: close menu after toggling theme
              }}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
