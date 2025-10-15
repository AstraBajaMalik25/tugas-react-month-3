import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const products = [
  { id: 1, name: 'Mouse', price: 200000 },
  { id: 2, name: 'Keyboard', price: 350000 },
  { id: 3, name: 'Monitor', price: 1500000 },
];

function ProductList() {
  const { addItem } = useContext(CartContext);

  return (
    <div>
      <h3>Produk</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - Rp{product.price.toLocaleString()}
            <button onClick={() => addItem(product)} style={{ marginLeft: '10px' }}>
              Tambah
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
