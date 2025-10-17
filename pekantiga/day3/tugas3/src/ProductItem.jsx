import React from "react";


const ProductItem = React.memo(({ name, addToCart }) => {
  console.log(`Render produk: ${name}`);

  return (
    <div
      style={{
        border: "1px solid gray",
        marginTop: "10px",
        padding: "10px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>{name}</span>
      <button onClick={() => addToCart(name)}>Tambah</button>
    </div>
  );
});

export default ProductItem;
