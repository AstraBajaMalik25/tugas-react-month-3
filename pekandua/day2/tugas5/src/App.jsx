import { useState } from 'react'

import './App.css'

function App() {

  const [todos, setTodos] = useState(["Belajar React", "Ngoding latihan"]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Handling Empty State pada List</h1>

      {todos.length === 0 ? (
        <p>Tidak ada tugas hari ini 🎉</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      )}

      <br />

      <button onClick={() => setTodos([])}>Kosongkan List</button>
      <button
        onClick={() => setTodos(["Belajar React", "Push ke GitHub", "Ngopi dulu"])}
        style={{ marginLeft: "10px" }}
      >
        Isi Ulang List
      </button>
    </div>
  );

}
export default App
