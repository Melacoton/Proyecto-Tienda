import React from 'react';

const Tarjeta = (props) => {
  return(
  <div class="card">
  <img src={props.img} alt={props.alt} width="300" height="200"/>
  <div className="card-body">
    <h4 className="card-title">{props.tipo}</h4>
    <p className="card-text">{props.precio}</p>
    <button onclick="addToCart()">Agregar al carrito</button>
  </div>
</div>  
  );
};

export default Tarjeta; 