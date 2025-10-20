import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function LocalStorageExample() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Apply the theme to the <body> whenever it changes
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="theme-container">
      <h3>Local Storage Theme Example</h3>
      <p>Current Theme: <b>{theme}</b></p>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}
