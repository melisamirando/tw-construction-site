import React from "react";


const Product = ({ product, addToCart }) => {
  const { id, title, price, quantity, image } = product;

  return (
    <div key={id} className="border p-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <img src={image} alt="Product" className="w-full mb-4 my-5" />
      <p className="text-gray-700">Price: ${price}</p>
      <p className="text-gray-700">Quantity: {quantity}</p>
      <button
        className="bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded my-4"
        onClick={() => addToCart(id)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
