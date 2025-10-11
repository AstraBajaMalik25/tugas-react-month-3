import React, { useEffect, useState } from "react";
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 5)))
      .catch((err) => {
        if (err.name !== "AbortError") console.error(err);
      })
      .finally(() => setLoading(false));

    return () => controller.abort(); // cleanup
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>AbortController</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App
