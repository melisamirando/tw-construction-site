import React from "react";

const Product = ({ product, addToCart }) => {
  const { id, title, price, quantity } = product;

  return (
    <div key={id}>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
