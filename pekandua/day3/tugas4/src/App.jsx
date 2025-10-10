import React, { useState, useEffect } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("Count berubah:", count);
  }, [count]);

  useEffect(() => {
    console.log("Nama berubah:", name);
  }, [name]);

  return (
    <div>
      <h2>Multiple useEffect</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Tambah Count</button>
      <br />
      <input
        type="text"
        placeholder="Ketik nama..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App
