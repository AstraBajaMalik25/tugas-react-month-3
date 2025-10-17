import React, { useState, useCallback } from "react";
import ProductList from "./ProductList";

// Tugas 3 (versi lengkap): Optimasi dengan useCallback
// Tujuan: Menghindari re-render komponen anak (ProductItem)
// ketika fungsi dikirim sebagai props.

export default function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  // useCallback memastikan fungsi ini tidak berubah setiap render
  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #aaa",
        borderRadius: "10px",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      <h2>Tugas 3 - useCallback (Enhanced)</h2>
      <button onClick={() => setCount(count + 1)}>Tambah Counter ({count})</button>

      <ProductList addToCart={addToCart} />

      <h3 style={{ marginTop: "20px" }}>🛒 Keranjang:</h3>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Keranjang kosong</p>
      )}
    </div>
  );
}
