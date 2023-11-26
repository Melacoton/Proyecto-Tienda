import React from 'react';

/*Esto es para la interfaz log in, a todo esto se me complican las interfaces 
poreso hago los componentes y fue, vos si sabes :))))*/ 
function Registro(){
    return(
        <div class="login">
        <div class="formulario">
          <form class="login-form">
            <input type="text" placeholder="usuario"/>
            <input type="password" placeholder="contraseña"/>
            <input type="email" placeholder="email"/>
            <button>login</button>
            <p className="mensaje">Creadores: Maicenita & Melanie</p>
          </form>
        </div>
      </div>
    );
};

export default Registro;