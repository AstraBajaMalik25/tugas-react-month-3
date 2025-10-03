// App.jsx
import React from 'react';
import ProductCard from './ProductCard';




function App() {
  return (
    <div style={{ display: 'flex',  flexWrap: 'wrap' }}>
      <ProductCard productName="Gaming Laptop" price={1500} stock={10} isAvailable={true} />
      <ProductCard productName="Mechannical Keyboard" price={120} isAvailable={false} />
      <ProductCard productName="Wig sahroni" price={6741} stock={1} isAvailable={true} />
      <ProductCard productName="Whiskas" price={700} stock={50} isAvailable={true} />
    </div>
  );
}

export default App; 