import React from 'react';
import Menu from '../Menu';
import { Link } from "react-router-dom";

export default function Login (){
    return(
        <div>
        <Menu/>
        <div class="login">
            <Link to={"/Form"}>
        <div class="formulario">
          <form class="login-form">
            <input type="text" placeholder="usuario"/>
            <input type="password" placeholder="contraseña"/>
            <input type="email" placeholder="email"/>
            <button>login</button>
            <p className="mensaje">Creadores: Maicenita & Melanie</p>
          </form>
        </div>
        </Link>
      </div>
      </div>
    );
};
