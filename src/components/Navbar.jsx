import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = ["Home", "About", "Projects", "Education", "Contact"];

  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

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

  useEffect(() => {
    const handleScrollHighlight = () => {
      const scrollPosition = window.scrollY + 100;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (
          section?.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(link);
        }
      });
    };

    window.addEventListener("scroll", handleScrollHighlight);
    return () => window.removeEventListener("scroll", handleScrollHighlight);
  }, []);

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
              <button
                onClick={() => handleScroll(link)}
                className={`transition font-medium ${
                  activeSection === link
                    ? "text-blue-600 dark:text-blue-400 underline"
                    : "text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm transition"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-800 dark:text-white"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3 bg-white dark:bg-gray-900 transition-all duration-300">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleScroll(link)}
                className={`block w-full text-left font-medium ${
                  activeSection === link
                    ? "text-blue-600 dark:text-blue-400 underline"
                    : "text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setIsOpen(false);
              }}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm transition"
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
