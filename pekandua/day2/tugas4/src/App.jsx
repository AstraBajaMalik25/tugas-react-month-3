import React from "react";
import "./App.css";

function App() {

  const todos = ["Belajar React", "Push ke GitHub", "Ngopi dulu"];


  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Daftar Tugas Hari Ini:</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
