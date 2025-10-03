import React from 'react';

function ProductCard(props) {
  
    <div className="container">
      <ProductCard productName="Laptop Gaming" price={1500} stock={10} isAvailable={true} />
      <ProductCard productName="Keyboard Mekanik" price={120} isAvailable={false} />
    </div>
  
    return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h3>{props.productName}</h3>
      <p>Price: ${props.price}</p>
      <p>Stock: {props.stock}</p>
      {props.isAvailable && <p style={{ color: 'green' }}>Tersedia</p>}
    </div>
    
  );
}



export default ProductCard;