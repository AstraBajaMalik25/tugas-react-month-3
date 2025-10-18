import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar({ onToggle }) {
  return (
    <div className="sidebar">
      <button className="toggle-btn" onClick={onToggle}>
        ☰
      </button>

      <div className="sidebar-content">
        <h1>🌙 React Router App</h1>
        <p>
          Sidebar content — kamu bisa isi menu tambahan, info, atau logo kecil
          di sini.
        </p>
      </div>

      {/* 👇 Social media icons section */}
      <div className="social-icons">
        <a href="https://github.com/bajamalik" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com/bajamalik" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/in/bajamalik" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/bajamalik" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;