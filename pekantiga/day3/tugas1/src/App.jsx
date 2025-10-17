import React, { useState } from "react";
import Child from "./Child";

// Tugas 1: Implementasi React.memo
// Tujuan: mencegah re-render jika props tidak berubah

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px", border: "2px solid #ccc", borderRadius: "10px" }}>
      <h2>Tugas 1 - React.memo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah Count</button>
      <br /><br />
      <input
        type="text"
        placeholder="Ketik sesuatu..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Child value={text} />
    </div>
  );
}
