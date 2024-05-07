// Tienda.js
import React from 'react';

function Tienda({ addToCart }) {
  const mascotas = [
    { id: 1, nombre: 'Perro', precio: 100 },
    { id: 2, nombre: 'Gato', precio: 80 },
    { id: 3, nombre: 'Conejo', precio: 50 },
  ];

  return (
    <div className="tienda">
      <h2>Lista de Mascotas</h2>
      <ul>
        {mascotas.map((mascota) => (
          <li key={mascota.id}>
            {mascota.nombre} - ${mascota.precio}{' '}
            <button onClick={() => addToCart(mascota)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tienda;

