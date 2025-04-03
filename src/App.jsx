import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
        <Header />
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
