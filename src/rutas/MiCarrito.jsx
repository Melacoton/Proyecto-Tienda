import React from 'react';
import Menu from '../Menu';
import { Link } from "react-router-dom";

const MiCarrito = ({ carrito = [] }) => { //el componente funcionall acepta un prop llamado "Carrito", el "= []" significa q inicializa con un valor predet de un array vacío en caso si no añadieron un valor
  return (
    <div>
      <Menu />
      <Link to={"/MiCarrito"}>
      <h1 className="Titulo">MI CARRITO</h1>
      {carrito.length === 0 ? ( //Si el carrito esta vacio va a visualizar el siguiente mensaje
        <p className='Msj'>El carrito está vacío</p>
      ) : (
        <ul>
          {carrito.map((item) => ( // para iterar sobre cada elemento del carrito y devuelve un nuevo array con elementos asi ver el seguimiento de los elementos
            <li key={item.id}>
              {item.marca} - ${item.precio}
            </li>
          ))}
        </ul>
      )}
      </Link>
    </div>
  );
};

export default MiCarrito;
