import React from'react';
import Tarjeta from '../Tarjeta';
import Menu from '../Menu';

export default function Remerones(){
return(
    <div>
        <Menu/>
    <h1 className="Titulo">REMERONES</h1>
        <hr/>
        <section className="cont1">
        <Tarjeta img="https://http2.mlstatic.com/D_NQ_NP_716733-MLA69424712072_052023-O.webp" alt="Remerones" marca="Remera Totoro"  precio="$15.000"/>
        <Tarjeta img="https://levisarg.vtexassets.com/arquivos/ids/711427/272_644c2e45178ff.jpg?v=638183145562130000" alt="Remerones" marca="Remeron Voyage"  precio="$15.000"/>
        <Tarjeta img="https://acdn.mitiendanube.com/stores/001/149/260/products/263eb137-bac0-4e49-812d-a5623a1cc4611-e870509e8a1d71849916517668644870-480-0.webp" alt="Remerones" marca="Blackim"  precio="$15.000"/>
        <Tarjeta img="https://acdn.mitiendanube.com/stores/001/149/260/products/a704ba9b-9da5-45db-b53a-30add64aef2a1-ccb43a16485a13595e16640040072854-480-0.webp" alt="Remerones" marca="A rayas dior"  precio="$15.000"/>
        </section>
        
        <br/>
        <br/>
        <br/>
        <br/>

        <section className="cont1">
        <Tarjeta img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZY-TDCyJcjgoEAY5PvXq2rkawC86EN5hFsA_8ulX7ATl5b8qWyN0vAcDlgdsY1y-KZiQ&usqp=CAU" alt="Remerones" marca="Remeron Gumball"  precio="$15.000"/>
        <Tarjeta img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphNwQ8XrkO9Swt7-DQebIo_7BmfjV4D163w&usqp=CAU" alt="Remerones" marca="Osito"  precio="$15.000"/>
        <Tarjeta img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRIpZ-D3nU_irQv8W1myH90mHMnaBKHMI1A&usqp=CAU" alt="Remerones" marca="Ghibli"  precio="$15.000"/>
        <Tarjeta img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTIAaMrN9A1HJPBfXW6nMBdrsZusGucDdlJw&usqp=CAU" alt="Remerones" marca="Osito"  precio="$15.000"/>
        </section>
    </div>
);
}