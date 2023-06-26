import React from "react";

const CartItem = ({ item, handleQuantityChange }) => {
  const { id, title, price, quantity, totalPrice } = item;

  const handleQuantityReduce = () => {
    if (quantity > 1) {
      handleQuantityChange(id, quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    handleQuantityChange(id, quantity + 1);
  };

  return (
    <div key={id}>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={handleQuantityReduce}>-</button>
      <button onClick={handleQuantityIncrease}>+</button>
    </div>
  );
};

export default CartItem;
