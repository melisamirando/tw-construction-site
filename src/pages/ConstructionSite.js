import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import CartItem from "../components/CartItem";

import images1 from "../assets/images/Product1.png";
import images2 from "../assets/images/Product2.png";
import images3 from "../assets/images/Product3.png";
import images4 from "../assets//images/Product4.png";

function ConstructionSite() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "High Quality Smart Card Keyless Digital",
      price: 100.0,
      quantity: 0,
      image: images1,
    },
    {
      id: 2,
      title: "High Security Smart Door Lock Wi-Fi",
      price: 200.0,
      quantity: 0,
      image: images2,
    },
    {
      id: 3,
      title: "Newest BLE Smart Locks Door Knob",
      price: 250.0,
      quantity: 0,
      image: images3,
    },
    {
      id: 4,
      title: "Safety Cat Eyes Camera View Electric Digital",
      price: 250.0,
      quantity: 0,
      image: images4,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [overallTotal, setOverallTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    setOverallTotal(total);
  }, [cart]);

  const addToCart = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );

    const existingCartItem = cart.find((item) => item.id === productId);
    if (existingCartItem) {
      const updatedCart = cart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price,
            }
          : item
      );
      setCart(updatedCart);
    } else {
      const productToAdd = updatedProducts.find(
        (product) => product.id === productId
      );
      setCart([...cart, { ...productToAdd, totalPrice: productToAdd.price }]);
    }

    setProducts(updatedProducts);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: newQuantity,
            totalPrice: newQuantity * item.price,
          }
        : item
    );
    setCart(updatedCart);
    setProducts(updatedProducts);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const renderProducts = () => {
    return products.map((product) => (
      <Product key={product.id} product={product} addToCart={addToCart} />
    ));
  };

  const renderCartItems = () => {
    return cart.map((item) => (
      <CartItem
        key={item.id}
        item={item}
        handleQuantityChange={handleQuantityChange}
        removeFromCart={removeFromCart}
      />
    ));
  };

  return (
    <>
      {/* <div className="bg-gray-100 max-h-screen"> */}
        <header className="bg-white shadow">
          <div className="container mx-auto py-4 px-8 ">
            <h1 className="container mx-auto text-4xl font-bold text-gray-800 text-center">
              Shop Smart
            </h1>
          </div>
        </header>
        <h2 className="container mx-auto text-4xl font-bold mt-8 py-4 text-center bg-gray-200">
          Products
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 ">
          {renderProducts()}
        </div>

        <div className="container mx-auto mt-8">
          <h2 className="container mx-auto text-2xl font-bold">Cart</h2>
          {renderCartItems()}
        </div>
        
        <div className="container mx-auto grid grid-cols-3 md:grid-cols-3 gap-2">
          <h2 className="container mx-auto text-2xl font-bold">
            Overall Total: ${overallTotal}
          </h2>
        </div>
        <footer className="bg-black py-4 px-8 mt-8">
          <div className="container mx-auto text-center">
            <p className="text-white">
              &copy; 2023 Shop Smart. All rights reserved.
            </p>
          </div>
        </footer>
      {/* </div> */}
    </>
  );
}

export default ConstructionSite;
