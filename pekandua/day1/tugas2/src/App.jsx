import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("");

  const handleLinkClick = (e) => {
    e.preventDefault();
    alert("Link diklik! (preventDefault dijalankan)");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Menggunakan SyntheticEvent</h2>
      <a href="https://google.com/https://www.youtube.com/" onClick={handleLinkClick}>
        Klik Link Ini
      </a>
      <br />
      <input
        type="text"
        placeholder="Ketik sesuatu..."
        value={text}
        onChange={handleChange}
      />
      <p>Isi input: {text}</p>
    </div>
  );
}

export default App
