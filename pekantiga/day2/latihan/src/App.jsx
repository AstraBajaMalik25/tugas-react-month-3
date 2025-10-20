import React, { useState } from "react";

// Custom hook for store logic
function useChiikawaStore() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("welcome");

  const products = [
    {
      id: 1,
      name: "Chiikawa Plush",
      price: 15,
      image: "https://i.imgur.com/vh6kR6n.png",
    },
    {
      id: 2,
      name: "Usagi Mug",
      price: 10,
      image: "https://i.imgur.com/06KSOCu.jpeg",
    },
    {
      id: 3,
      name: "Hachiware Keychain",
      price: 8,
      image: "https://i.imgur.com/jy3zTgC.png",
    },
        {
      id: 3,
      name: "Hachiware Keychain",
      price: 8,
      image: "https://i.imgur.com/jy3zTgC.png",
    },
        {
      id: 3,
      name: "Hachiware Keychain",
      price: 8,
      image: "https://i.imgur.com/jy3zTgC.png",
    },
        {
      id: 3,
      name: "Hachiware Keychain",
      price: 8,
      image: "https://i.imgur.com/jy3zTgC.png",
    },x
  ];

  const addToCart = (product) => setCart([...cart, product]);
  const clearCart = () => setCart([]);
  const goToShop = () => setPage("shop");
  const goToWelcome = () => setPage("welcome");

  return { cart, products, addToCart, clearCart, page, goToShop, goToWelcome };
}

// Welcome Page Component
function WelcomePage({ onStart }) {
  return (
    <div style={{ textAlign: "center", marginTop: "120px" }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Welcome to Chiikawa Store 🐰
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "40px" }}>
        Your favorite cute merch is waiting for you!
      </p>
      <button
        onClick={onStart}
        style={{
          backgroundColor: "#e0e0e0",
          color: "#333",
          border: "none",
          padding: "12px 25px",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
        }}
      >
        🛍️ Start Shopping
      </button>
    </div>
  );
}

// Main Store UI
function StorePage({ products, cart, addToCart, clearCart, goToWelcome }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#d7d6c8",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "5px solid #d9d9d9",
          padding: "25px 0",
          marginBottom: "30px",
          boxShadow: "0 6px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            color: "#2c2c2c",
            fontSize: "2.8rem",
            fontWeight: "bold",
            margin: 0,
            textShadow: "1px 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          Chiikawa Store 🐰
        </h1>
      </header>

      <button
        onClick={goToWelcome}
        style={{
          marginBottom: "25px",
          backgroundColor: "#e0e0e0",
          color: "#333",
          border: "none",
          padding: "10px 18px",
          borderRadius: "8px",
          fontSize: "0.95rem",
          cursor: "pointer",
        }}
      >
        ⬅️ Back to Home
      </button>

      <h2 style={{ color: "#333" }}>🛍️ Product List</h2>
      <hr style={{ width: "90%", marginBottom: "30px" }} />

      {/* Product List */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              backgroundColor: "#fff",
              padding: "15px",
              width: "200px",
              boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
            />
            <h3 style={{ color: "#333" }}>{p.name}</h3>
            <p style={{ color: "#555" }}>${p.price}</p>
            <button
              onClick={() => addToCart(p)}
              style={{
                backgroundColor: "#e0e0e0",
                color: "#333",
                border: "none",
                padding: "8px 15px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "12px",
          backgroundColor: "#fff",
          padding: "20px",
          width: "280px",
          margin: "40px auto",
          boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ color: "#333" }}>🧺 Shopping Cart</h3>
        <hr />
        {cart.length === 0 ? (
          <p style={{ color: "#777" }}>Cart is empty</p>
        ) : (
          cart.map((item, i) => (
            <p key={i} style={{ color: "#555" }}>
              {item.name} - ${item.price}
            </p>
          ))
        )}
        <h4 style={{ color: "#333" }}>Total: ${total}</h4>
        <button
          onClick={clearCart}
          style={{
            backgroundColor: "#e0e0e0",
            color: "#333",
            border: "none",
            padding: "8px 15px",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

// App Component
export default function App() {
  const { cart, products, addToCart, clearCart, page, goToShop, goToWelcome } =
    useChiikawaStore();

  return page === "welcome" ? (
    <WelcomePage onStart={goToShop} />
  ) : (
    <StorePage
      products={products}
      cart={cart}
      addToCart={addToCart}
      clearCart={clearCart}
      goToWelcome={goToWelcome}
    />
  );
}
