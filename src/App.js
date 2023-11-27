import React from 'react';
import './index.css';
import Menu from './Menu';
import Imagen from './Imagen';
/*En este archivo usamos los componentes como etiquetas para que se vean en la pagina final,
para esto los importamos y los metemos dentro de la funcion "App", 
e importamos los estilos generales de la pagina*/
function App() {
  return (
   <div>
    <Menu img="ropa.jpg"/>
    <Imagen/>
    <hr/>
   </div>
  );
};
//lo pongo asi para que ya quede dsp lo cambiamos de lugar cuando este lo de las rutas (categorias)
export default App;

