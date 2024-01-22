import "./Headers.css"
import React, { useState } from "react";
const OrderBasket = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Фудболка", price: 800, quantity: 0 },
    { id: 2, name: "Толстовка", price: 1300, quantity: 0 },
    { id: 3, name: "Обувь", price: 2000, quantity: 0 },
  ]);

  const addToBasket = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const deleteBasket = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(0, product.quantity - 1) }
          : product
      )
    );
  };

  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="container2">
      <ul>
        {products.map((product) => (    
          <div key={product.id}>
            {product.name} - {product.price} SOM - Completed: {product.quantity}
            <button onClick={() => addToBasket(product.id)}>BUY</button>
            <button className="container3" onClick={() => deleteBasket(product.id)}>DELETE</button>
          </div>
        ))}
      </ul>
      <h2>KORSINE: {totalPrice} som</h2>
      <img src="https://oborot.ru/wp-content/uploads/2020/12/screenshot_79-1024x700.png" alt="" />
      {totalPrice > 0    ? (
        <p>Ваша корзина не пуста</p>
      ) : (
        <p>Ваша корзина пуста.</p>
      )}
    </div>
  );
};

export default OrderBasket;
