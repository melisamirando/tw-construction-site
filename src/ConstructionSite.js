import React, { useState, useEffect } from "react";
import Product from "./components/Product";
import CartItem from "./components/CartItem";

function ConstructionSite() {
  const [products, setProducts] = useState([
    { id: 1, title: "Product 1", price: 100.0, quantity: 0 },
    { id: 2, title: "Product 2", price: 200.0, quantity: 0 },
    { id: 3, title: "Product 3", price: 250.0, quantity: 0 },
    { id: 4, title: "Product 4", price: 250.0, quantity: 0 },
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
    <div>
      <h1>My Shop</h1>
      <div>
        <h2>Products</h2>
        {renderProducts()}
      </div>
      <div>
        <h2>Cart</h2>
        {renderCartItems()}
        <h2>Overall Total: ${overallTotal}</h2>
      </div>
    </div>
  );
}

export default ConstructionSite;