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
    <div key={id} className="border p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">Price: ${price}</p>
      <p className="text-gray-700">Quantity: {quantity}</p>
      <p className="text-gray-700 font-bold">Total Price: ${totalPrice}</p>
      <button
        className="bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-1"
        onClick={handleQuantityReduce}
      >
        -
      </button>
      <button
        className="bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-1"
        onClick={handleQuantityIncrease}
      >
        +
      </button>
    </div>
  );
};

export default CartItem;
