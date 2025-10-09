import React, { useState } from "react";
import './App.css'

function App() {



  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 1️⃣ Menggunakan if/else di luar JSX (untuk logika kompleks)
  let message;
  if (isLoggedIn) {
    message = <h2>Selamat datang kembali!</h2>;
  } else {
    message = <h2>Silakan login terlebih dahulu.</h2>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contoh Conditional Rendering</h1>

      <div>{message}</div>


      <div>
        {isLoggedIn ? (
          <p>Kamu sedang login sekarang.</p>
        ) : (
          <p>Kamu belum login.</p>
        )}
      </div>

     
      <div>
        {isLoggedIn && <p>Terima kasih sudah login</p>}
      </div>

     
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: isLoggedIn ? "tomato" : "lightgreen",
          border: "none",
          borderRadius: "8px",
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}



export default App
