import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function CartDisplay() {
  const { cart, removeItem, clearCart, total } = useContext(CartContext);

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Keranjang</h3>
      {cart.length === 0 ? (
        <p>Keranjang kosong</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - Rp{item.price.toLocaleString()}
              <button onClick={() => removeItem(item.id)} style={{ marginLeft: '10px' }}>
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}

      <p><strong>Total: </strong>Rp{total.toLocaleString()}</p>

      {cart.length > 0 && (
        <button onClick={clearCart} style={{ marginTop: '10px' }}>
          Kosongkan Keranjang
        </button>
      )}
    </div>
  );
}

export default CartDisplay;
