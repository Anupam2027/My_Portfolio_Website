import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-md z-50">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <nav className="space-x-6 hidden md:flex">
        <a href="#projects" className="hover:text-gray-500">
          Projects
        </a>
        <a href="#about" className="hover:text-gray-500">
          About
        </a>
        <a href="#contact" className="hover:text-gray-500">
          Contact
        </a>
      </nav>
      <button onClick={() => setDarkMode(!darkMode)} className="p-2">
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </header>
  );
};

export default Header;
