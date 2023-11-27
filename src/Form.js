import React, { useState, useEffect } from 'react';
import Menu from './Menu';

export default function Form() {
    const [usuario, setUsuario] = useState('');
    const [contra, setContra] = useState('');
    const [email, setEmail] = useState('');
    const [enviado, setEnviado] = useState(false);

    useEffect(() => {
        if (enviado) {
          localStorage.setItem('usuario', usuario);
          localStorage.setItem('contra', contra);
          localStorage.setItem('email', email);
        }
      }, [enviado, usuario, contra, email]);
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setEnviado(true);
      }; 
      
        
return (
    <div>
        <Menu/>
    <div class="login">
      <div class="formulario">
    {!enviado && (
    <form onSubmit={handleSubmit} className='login-form'>
        <input type="text" placeholder="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
          <input type="password" placeholder="contraseña" value={contra} onChange={(e) => setContra(e.target.value)}/>
          <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className="envio" type="submit">Log In</button>
          <p className="mensaje">Creadores: Maicenita & Melanie</p>
    </form>
    )}
    {enviado && <div className="mensaje">
        <p className="mensaje-grande">Bienvenid@ {usuario}</p>
        <p className="mensaje-chico">¡Esperamos que disfrutes de nuestra página! Ahora podras recibir actualizacion y/o descuentos por mail</p>
        </div>}
    </div>
    </div>
    </div>
  );
}
