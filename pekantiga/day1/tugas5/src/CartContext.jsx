import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item) => setCart(prev => [...prev, item]);

  const removeItem = (id) => setCart(prev => prev.filter(item => item.id !== id));

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cart,     addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
