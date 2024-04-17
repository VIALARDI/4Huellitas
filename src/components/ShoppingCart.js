// ShoppingCart.js
import React from 'react';

function ShoppingCart({ cart }) {
  return (
    <div className="shopping-cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
