import React from'react';
import Tarjeta from '../Tarjeta';
import Menu from '../Menu';


export default function Abrigos(){

const agregarAlCarrito = (Tarjeta) => {
    console.log('Agregado al carrito:', Tarjeta);
};


return(
    <div>
        <Menu/>
    <h1 className="Titulo">ABRIGOS-BUZOS</h1>
        <hr/>
        <section className="cont1">
        <Tarjeta id={9} img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTIqMiZVVGegzgnpR59C8iLxMpU8zgZ5Q-xAj70V4hQwEQr4oB6XRZvxxaEMRuc_8V93f312K6ul60p-P3F0FSALCdiusHal4oRvxrLp6DQu65clHb3pOcKyA&usqp=CAE" alt="Abrigo" marca="90's sport" precio="$50.000" onAgregarAlCarrito={agregarAlCarrito} />
        <Tarjeta id={10} img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEj5c3wCrrxqrdAwdd3oT9rCTJMrlSRFDYVuPSZPpaaDmNuxvRfuZf1bRiF65B4NiMzOs71BXi4_gqyxkTF11Qo2K4laCEK7Y5RbgxVHDR962-BJ7nOkrFZg&usqp=CAE" alt="Abrigo" marca="90's Vintage" precio="$50.000" onAgregarAlCarrito={agregarAlCarrito}/>
        <Tarjeta id={11} img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8_GOhRCLbw7SmkHImraBX2keG2COPDD6G2xTDJq4PF1xn_nbwP11cXY5ssoCBc9zVb0UFq0jrAYFpYZVt9D4l_pXJU70Y_c9X-ULIkcqv0Q-sINZ5cnnR&usqp=CAE" alt="Abrigo" marca="Campera mod" precio="$60.000" onAgregarAlCarrito={agregarAlCarrito} />
        <Tarjeta id={12} img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR0qE2pB_9M6j1OCoOBdD_CF1jnIQJwxFrycc8os-hJdRQk13aX5XS4_H0NyIPj07k8wShtMvOFjmNLOjjas-7HUSKfHXcGyyWeQo9UM8q1_9OOFdhE31sq&usqp=CAE" alt="Abrigo" marca="Campera cloud" precio="$40.000" onAgregarAlCarrito={agregarAlCarrito} />
        </section>
       
        <br/>
        <br/>
        <br/>


        <section className="cont1">
        <Tarjeta id={13} img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ3ds6BsE_DB0eqPMrKWs_f96mlOjNQlPoTZGG8M3Axt1EqvZQJOX_xDwgJl3pMBozl-evxjxlm-hz5B8E6FNbLy4MddZxHmTxVqv9rUHPp&usqp=CAE" alt="Cardigan" marca="Cardigan" precio="$20.000" onAgregarAlCarrito={agregarAlCarrito} />
        <Tarjeta id={14} img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmWrEeYH_OlJ7yzB43X5J1HwlW5bj3hTDuJM2mN40zOQyy8JluQ-oT_kL8R6S-y3Xy0mQbtdeb6o__DhnvAwj5F5EplilQUbXR4qm6gc10qZSPkNUvmRn9Gg&usqp=CAE" alt="Buzo" marca="CALIF" precio="$15.000" onAgregarAlCarrito={agregarAlCarrito} />
        <Tarjeta id={15} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOq5_GHX0OiD6N6pIWRbevoHUPZU5SLG5vgw&usqp=CAU" alt="Cardigan" marca="Cardigan a mano" precio="$10.000" onAgregarAlCarrito={agregarAlCarrito} />
        <Tarjeta id={16} img="https://crossclothing.com.ar/wp-content/uploads/2023/07/4x5-BUZO-EGOBLACK-F.jpg" alt="Buzo" marca="Buzo black"  precio="$30.000" onAgregarAlCarrito={agregarAlCarrito} />
        </section>


    </div>
);
}
