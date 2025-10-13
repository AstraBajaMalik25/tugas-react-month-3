import React, { createContext, useState, useContext } from "react";


const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


function ThemeButton() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: isDark ? "#333" : "#eee",
        color: isDark ? "#fff" : "#000",
        padding: "10px 15px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default function ContextExample() {
  return (
    <ThemeProvider>
      <div
        style={{
          border: "2px solid #777",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          width: "300px",
        }}
      >
        <h3>Context API Example</h3>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}
