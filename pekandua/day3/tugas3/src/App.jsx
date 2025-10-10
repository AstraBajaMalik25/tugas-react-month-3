import React, { useState, useEffect } from "react";
import './App.css'


function App() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    console.log("Event listener ditambahkan");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener dihapus");
    };
  }, []);

  return (
    <div>
      <h2>Cleanup Function</h2>
      <p>Lebar: {size.width}px</p>
      <p>Tinggi: {size.height}px</p>
    </div>
  );
}
export default App
