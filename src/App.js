import './index.css';
import Menu from './Menu';
import Imagen from './Imagen';
import Categorias from './Categorias';
import Tarjeta from './Tarjeta';
import Registro from './Registro';
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
    <Tarjeta  img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ea7b8d93-0ec3-4497-b578-569e2b561a22/air-jordan-1-retro-high-og-zapatillas-70bsMX.png" alt="Nike Air Max 90" marca_modelo="Nike Air Max 90" precio="$12000"/>
    <Registro/>
   </div>
  );
};
//lo pongo asi para que ya quede dsp lo cambiamos de lugar cuando este lo de las rutas (categorias)
export default App;

