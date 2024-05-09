import React, { useState } from 'react';

function Carrito() {
  // Estado para almacenar los productos en el carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  const agregarProductoAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    calcularTotal();
  };

  // Función para eliminar un producto del carrito
  const eliminarProductoDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
    calcularTotal();
  };

  // Función para calcular el total de la compra
  const calcularTotal = () => {
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    document.getElementById('total').innerText = total.toFixed(2);
  };

  // Manejo del evento click en el botón de "Proceder al Pago"
  const procederAlPago = () => {
    alert('¡Gracias por tu compra!');
  };

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      {/* Mostrar los productos en el carrito */}
      <div id="lista-productos">
        {carrito.map((producto, index) => (
          <div key={index} className="producto">
            {producto.nombre} - ${producto.precio}
            <button onClick={() => eliminarProductoDelCarrito(index)}>Eliminar</button>
          </div>
        ))}
      </div>
      {/* Total de la compra */}
      <div className="total">Total: <span id="total">0.00</span></div>
      {/* Botón para proceder al pago */}
      <button onClick={procederAlPago}>Proceder al Pago</button>
    </div>
  );
}

export default Carrito;
