import React from 'react'; 

//Las tarjetas son para los productos dsp 
const Tarjeta = (props) => {
  return(
    /*Con las props reutilizamos el componente para los distintos productos,
    Cada tarjeta va a tener una imagen del producto, con el tipo de producto(marca), el precio
    y un boton para agregar al carrito*/
  <div className="card">
  <img src={props.img} alt={props.alt} width="300" height="200"/>
  <div className="card-body">
    <h4 className="card-title">{props.marca}</h4>
    <p className="card-text">{props.precio}</p>
    <button onclick="addToCart()">Agregar al carrito</button>
  </div>
</div>  
  );
};
export default Tarjeta; 