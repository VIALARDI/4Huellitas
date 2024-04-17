// Pets.js
import React from 'react';

function Pets({ addToCart }) {
  const pets = [
    { id: 1, name: 'Perro', price: 100 },
    { id: 2, name: 'Gato', price: 80 },
    { id: 3, name: 'Conejo', price: 50 },
  ];

  return (
    <div className="pets">
      <h2>Lista de Mascotas</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.name} - ${pet.price}{' '}
            <button onClick={() => addToCart(pet)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pets;
