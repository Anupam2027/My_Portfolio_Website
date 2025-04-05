import { ThemeProvider } from "./context/ThemeContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";
import Header from "./components/Header";
import Hero from "./components/Hero"; // ✅ Check if this file exists
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import PageWrapper from "./components/PageWrapper";
import CursorEffect from "./components/CursorEffect";
import Dashboard from "./pages/Dashboard"; // ✅ Check if this file exists
import AuthButton from "./components/AuthButton";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading....
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <CursorEffect />
        <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
          <Header />
          <AuthButton /> {/* Shows login/logout button */}
          <Routes>
            {/* Portfolio Home Page */}
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Hero /> {/* ✅ This should be visible */}
                  <Projects />
                  <About />
                  <Contact />
                </PageWrapper>
              }
            />
            {/* Protected Dashboard Route */}
            <Route
              path="/dashboard"
              element={
                user ? (
                  <PageWrapper>
                    <Dashboard /> {/* ✅ Ensure this file exists */}
                  </PageWrapper>
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
