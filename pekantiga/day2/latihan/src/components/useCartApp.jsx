import { useState } from "react";

function useCartApp() {
  const [cart, setCart] = useState([]);
  const [started, setStarted] = useState(false);

  // --- UI logic ---
  const startShopping = () => {
    console.log("Start Shopping clicked"); // ✅ temporary debug log
    setStarted(true);
  };

  const goHome = () => setStarted(false);

  // --- Cart logic ---
  const addItem = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return {
    started,
    startShopping,
    goHome,
    cart,
    addItem,
    removeItem,
    clearCart,
    totalPrice,
  };
}

export default useCartApp;
