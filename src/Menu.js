import React from "react";
function Menu() {
return (
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
  <div className="carrito">
    <a href="carrito.html"><i class="fas fa-shopping-cart"></i></a>
  </div>
</header>
);
}
export default Menu; 