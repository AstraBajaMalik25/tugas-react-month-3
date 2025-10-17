import React from "react";
import ProductItem from "./ProductItem";

// Daftar produk sederhana
const products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset"];

export default function ProductList({ addToCart }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>🧩 Daftar Produk</h3>
      {products.map((item) => (
        <ProductItem key={item} name={item} addToCart={addToCart} />
      ))}
    </div>
  );
}
