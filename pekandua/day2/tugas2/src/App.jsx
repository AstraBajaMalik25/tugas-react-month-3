import { useState } from 'react'

import './App.css'

function Greeting({ isLoggedIn, newMessages }) {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Selamat datang kembali!</h2>
      ) : (
        <h2>Silakan login terlebih dahulu</h2>
      )}

      {newMessages > 0 && <p>Kamu punya {newMessages} pesan baru.</p>}
    </div>
  );
}

export default App
