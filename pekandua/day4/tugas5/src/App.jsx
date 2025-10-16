import React, { useEffect, useState } from "react";
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // Example: tampilkan hanya user yang namanya mengandung huruf "C" dan hanya ambil 5 pertama
        const filtered = data
          .filter((u) => u.name.includes("C"))
          .slice(0, 5)
          .map((u) => ({ name: u.name, email: u.email }));
        setUsers(filtered);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}> 
      <h1>JSON Manipulation Example</h1>
      <ul>
        {users.map((u, i) => (
          <li key={i}>
            {u.name} — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
