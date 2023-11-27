import React from 'react';
// Tarjetas para los productos de la feria


const Tarjeta = ({ id, marca, precio, onAgregarAlCarrito, img, alt }) => { // definimos el componente tarjeta
  const handleClick = () => { //definimos una función handleClick para cuando el botón "Agregar al carrito" hagan clic.
    onAgregarAlCarrito({ id, marca, precio, img, alt }); // se llama a la función onAgregarAlCarrito (pasada como prop) con un objeto que contiene info del producto (id, marca, precio, img, alt).
    console.log('Agregado al carrito:', Tarjeta); //visualiza en la consola
  };


  return (
    /*Con la funcion reutilizamos el componente para los distintos productos,
    Cada tarjeta va a tener una imagen del producto, con el tipo de producto(marca), el precio
    y un boton para agregar al carrito*/
    <div className="card">
     <img src={img} alt={alt} width="300" height="200" />
      <div className="card-body">
        <h2 className="card-title">{marca}</h2>
        <p className="card-text">{precio}</p> {/* Podiamos poner tambien "$" en p, asi no hacia falta ponerlo en precio xd */}
      <button onClick={handleClick}>Agregar al carrito</button> {/* el botón tiene un evento onClick que ejecuta la función handleClick cuando se hace clic */}
      </div>
    </div>
  );
};


export default Tarjeta;
