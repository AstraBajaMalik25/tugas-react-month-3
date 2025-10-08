import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState("");

  const handleClick = () => setMessage("Tombol diklik!");
  const handleMouseEnter = () => setMessage("Mouse masuk ke tombol!");
  const handleMouseLeave = () => setMessage("Mouse keluar dari tombol!");

  return (
    <div>
      <h2>1. Event Handler Sederhana</h2>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Klik Aku
      </button>
      <p>{message}</p>
    </div>
  );
}

export default App
