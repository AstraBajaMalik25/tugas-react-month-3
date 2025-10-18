import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="app">
        {/* Sidebar */}
        <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
          <h1 className="logo">Menu</h1>
          <h3>also check on my socials</h3>

          {/* 🔗 Social media section tanpa icon */}
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </aside>

        {/* Main section */}
        <div>
<header className="header">
  <button
    className="sidebar-toggle"
    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
  >
    {isSidebarOpen ? "☰ Hide" : "☰ Show"}
  </button>

  {/* 🏷️ Title di tengah */}
  <h1 className="header-title">My Portofolio</h1>

  <nav className="nav-links">
    <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
      Home
    </NavLink>
    <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
      About
    </NavLink>
    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
      Contact
    </NavLink>
  </nav>
</header>


          <main className="content">
            <AnimatedRoutes />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
