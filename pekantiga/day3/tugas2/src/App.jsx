import React, { useState, useMemo } from "react";

// Tugas 2: Optimasi dengan useMemo
// Tujuan: mencegah perhitungan berat dijalankan berulang kali tanpa perubahan data

export default function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // useMemo digunakan agar fungsi berat ini hanya dihitung ulang ketika 'number' berubah
  const doubleNumber = useMemo(() => {
    console.log("🔄 Menghitung nilai ganda...");
    let i = 0;
    while (i < 1000000000) i++; // simulasi perhitungan berat
    return number * 2;
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    padding: "20px",
    borderRadius: "10px",
    transition: "0.3s",
  };

  return (
    <div style={themeStyles}>
      <h2>Tugas 2 - useMemo</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>
        Ubah Tema
      </button>
      <p>Hasil: {doubleNumber}</p>
    </div>
  );
}
