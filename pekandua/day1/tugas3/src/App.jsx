import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  return (
    <div>
      <h2>Controlled Component</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan nama..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>Nama yang disubmit: {submittedName}</p>
    </div>
  );
}

export default App
