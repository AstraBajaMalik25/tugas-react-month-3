import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({ status }) {
  let message;
  switch (status) {
    case "loading":
      message = "Sedang memuat...";
      break;
    case "success":
      message = "Data berhasil dimuat!";
      break;
    case "error":
      message = "Terjadi kesalahan!";
      break;
    default:
      message = "Status tidak diketahui.";
  }

  return <p>{message}</p>;  
}
 

export default App
