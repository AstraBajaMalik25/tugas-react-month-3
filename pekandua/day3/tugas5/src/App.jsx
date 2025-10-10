import React, { useState, useEffect } from "react";
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Mulai ambil data...");
    const timer = setTimeout(() => {
      setData({ name: "John Doe", email: "john@mail.com" });
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Simulasi Fetch Data</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div>
          <p>Nama: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
}
export default App;
