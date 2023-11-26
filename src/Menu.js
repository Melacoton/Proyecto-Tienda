import React from "react";
import ButtonLink from './ButtonLink';

function Menu() {
return (
  /*La etiqueta header contiene toddo el menu de navegacion*/
  /*Contiene una imagen del logo dentro de un div, otro div con una lista
  para agregar la navegacion, y otro div que contiene la barra de busqueda dentro de un formulario*/
  <header>
  <div className="logo">
  <img src="ropa.jpg" alt="Logo de la tienda"/>
  </div>
  <div className="menu">
    <ul>
      <li><ButtonLink to="/" text="Inicio"/></li>
      <li><ButtonLink to="/Categorias" text="Productos"/></li>
      <li><ButtonLink to="/Login" text="Log In"/></li>
      <li><ButtonLink to="/MiCarrito" text="Mi carrito"/></li>
    </ul>
  </div>
  <div className="buscador">
    <form action="buscar.php" method="get">
      <input type="text" name="buscar" placeholder="Buscar..."/>
      <button type="submit"></button>
    </form>
  </div>
</header>
);
};

export default Menu;
