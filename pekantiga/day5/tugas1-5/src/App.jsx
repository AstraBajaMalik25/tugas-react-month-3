import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login"; // ✅ Gunakan file Login.jsx
import "./App.css";

// 🧭 Protected Route
function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// ⚠️ 404 Page
function NotFound() {
  return (
    <motion.div
      className="notfound-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <NavLink to="/">Go Back Home</NavLink>
    </motion.div>
  );
}

// ✨ Animated Routes
function AnimatedRoutes({ isLoggedIn, onLoginHandler }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Home />
              </motion.div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <About />
              </motion.div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Contact />
              </motion.div>
            </ProtectedRoute>
          }
        />

        {/* 🔐 Login & 404 */}
        <Route
          path="/login"
          element={<Login onLogin={onLoginHandler} isLoggedIn={isLoggedIn} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

// 🧠 Main App
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const onLoginHandler = (status) => {
    setIsLoggedIn(status);
    if (status) {
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.removeItem("isLoggedIn");
    }
  };

  return (
    <Router>
      <div className="app">
        {/* Sidebar */}
        <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
          <h1 className="logo">Menu</h1>
          <h3>also check on my socials</h3>
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

        {/* Main Section */}
        <div className="main-container">
<header className="header">
  <div className="header-left">
    <button
      className="sidebar-toggle"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      {isSidebarOpen ? "☰ Hide" : "☰ Show"}
    </button>
    <h1 className="header-title">My Portfolio</h1>
  </div>

  <nav className="nav-links">
    {isLoggedIn ? (
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button
          className="logout-btn"
          onClick={() => onLoginHandler(false)}
        >
          Logout
        </button>
      </>
    ) : (
      <NavLink to="/login">Login</NavLink>
    )}
  </nav>
</header>


          <main className="content">
            <AnimatedRoutes
              isLoggedIn={isLoggedIn}
              onLoginHandler={onLoginHandler}
            />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
