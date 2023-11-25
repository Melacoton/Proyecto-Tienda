import './index.css';
import Menu from './Menu';
import Imagen from './Imagen';
import Categorias from './Categorias';

/*En este archivo usamos los componentes como etiquetas para que se vean en la pagina final,
para esto los importamos y los metemos dentro de la funcion "App", 
e importamos los estilos generales de la pagina*/
function App() {
  return (
   <div>
    <Menu/>
    <Imagen/>
    <hr/>
    <h2>Categorias</h2>
    <Categorias/>
   </div>
  );
};
//lo pongo asi para que ya quede dsp lo cambiamos de lugar cuando este lo de las rutas (categorias)
export default App;

