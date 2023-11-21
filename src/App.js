import './index.css';
import Menu from './Menu';
import Tarjeta from './Tarjeta';
import Imagen from './Imagen';

function App() {
  return (
   <div>
    <Menu/>
    <Imagen/>
    <div> 
        <hr/>
        <div class="mejor">
          <h1 class="best">Lo mas vendido de la semana</h1>
          </div>
    </div>
    <Tarjeta  img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ea7b8d93-0ec3-4497-b578-569e2b561a22/air-jordan-1-retro-high-og-zapatillas-70bsMX.png" alt="Nike Air" tipo="Nike Air 20" precio="$10000"/>
   </div>
  );
}

export default App;
