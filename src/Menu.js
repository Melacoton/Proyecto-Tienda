import React from "react";
import './Archivos css/menu.css';

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
      <li><a href="inicio">Inicio</a></li>
      <li><a href="productos">Productos</a></li>
      <li><a href="Login">Log In</a></li>
      <li><a href="compras">Mi carrito</a></li>
    </ul>
  </div>
  <div className="buscador">
    <form action="buscar.php" method="get">
      <input type="text" name="q" placeholder="Buscar..."/>
      <button type="submit"><i class="fas fa-search"></i></button>
    </form>
  </div>
</header>
);
}
export default Menu; 