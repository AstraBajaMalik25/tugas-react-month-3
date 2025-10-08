import { useState } from 'react'
import './App.css'

function App() {
  const inputRef = useRef();
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(inputRef.current.value);
  };

  return (
    <div>
      <h2>4. Uncontrolled Component</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Masukkan nama..." ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
      <p>Nama yang disubmit: {result}</p>
    </div>
  );
}

export default App
