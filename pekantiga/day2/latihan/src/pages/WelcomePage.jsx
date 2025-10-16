import React from "react";

function WelcomePage({ onStart }) {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Welcome to Chiikawa Store!
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        
      </p>
      <button
        onClick={onStart}
        style={{
          padding: "12px 24px",
          fontSize: "1rem",
          borderRadius: "8px",
          backgroundColor: "#ffb6c1",
          border: "none",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        Start Shopping 🛍️
      </button>
    </div>
  );
}

export default WelcomePage;
