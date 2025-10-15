import React from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import CartDisplay from './CartDisplay';

function App() {
  return (
    <CartProvider>
      <h2>Tugas 5: Shopping Cart</h2>
      <ProductList />
      <CartDisplay />
    </CartProvider>
  );
}

export default App;
