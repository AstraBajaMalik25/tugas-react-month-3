import React, { useEffect, useState } from "react";
import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Fetch API</h1>
      {data ? (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App
