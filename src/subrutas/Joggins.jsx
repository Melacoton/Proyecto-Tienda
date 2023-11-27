import React from'react';
import Tarjeta from '../Tarjeta';
import Menu from '../Menu';


export default function Joggins(){


const agregarAlCarrito = (producto) => {
    console.log('Agregado al carrito:', producto);
      };
   
return(
    <div>
        <Menu/>
    <h1 className="Titulo">PANTS-JOGGINS</h1>
        <hr/>
        <section className="cont1">
        <Tarjeta id={25} img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTle5TWl0ZpbLJKif5MAMGPTE9M1LFzbmuzBhE6XR7_qR3UqrSODqxYiPs9xqRoUwioPOhR5owRLTGj89sffW-igxtgPZ7Y7p5j2Aa2k4yd&usqp=CAE" alt="Pantalon" marca="Classic sport" precio="$20.000" onAgregarAlCarrito={agregarAlCarrito}/>
        <Tarjeta id={26} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4riVEM1s1P3kiUHVUfQhFrT0Co1njWb0CNZZJ_0O3M-SzxwX_em7ss8n9m8mbyPqVC4&usqp=CAU" alt="Pantalon" marca="Baggy chick" precio="$30.000" onAgregarAlCarrito={agregarAlCarrito}/>
        <Tarjeta id={27} img="https://levisarg.vtexassets.com/arquivos/ids/812221-800-auto?v=638309026903900000&width=800&height=auto&aspect=true" alt="Pantalon" marca="Classic marron" precio="$20.000" onAgregarAlCarrito={agregarAlCarrito}/>
        <Tarjeta id={28} img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTZL3-RU5KTxoD3061wT0fonxmBgX8Ar5U3txVlzhk1elIZ0OjflRA7mwe-o-pXFhVW95icP7LwNQq61XP-Io1w8VE9pRkWnZoVHt39JQcu&usqp=CAE" alt="Pantalon" marca="Black sidir" precio="$30.000" onAgregarAlCarrito={agregarAlCarrito}/>
        </section>
       
        <br/>
        <br/>
        <br/>
        <br/>


        <section className="cont1">
        <Tarjeta id={29} img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHDVjqIWGr5eOS69Dg-vqIxWFf9QJl2ezMiPNU4vkzLFpOzrV8Dcom7icGJ30U4ziKPk1vv9-7M7WxB6ioKajoTU3vhCVX9mck8x1hQWrl&usqp=CAE" alt="Pantalon" marca="Corean vibes" precio="$40.000" onAgregarAlCarrito={agregarAlCarrito}/>
        <Tarjeta id={30} img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSsPdp-rC0gKc9bfokCQp-qSlClVN_FZtqI343d9d7HC19oo2GnS23GUXULbIzO68444c7ttiPZ7D2WpuklB7d-TfDMinQ5YO83L0zaFj1wf3c0twy4jGwh&usqp=CAE" alt="Pantalon" marca="Baddy new" precio="$20.000" onAgregarAlCarrito={agregarAlCarrito}/>
        <Tarjeta id={31} img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOhMsgIdsbAXOCOqtRrCfh5X699N07PpXkWLbUbpZxyFY5IDKjluDRlvgHAzsMN_mna8cOO_64RBZk-iK2i9hmONDEsU97-4WSXeisB6A&usqp=CAE" alt="Pantalon" marca="Cargo black" precio="$25.000" onAgregarAlCarrito={agregarAlCarrito}/>
        <Tarjeta id={32} img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8UU5f_Z6P3p3nBmoUV-BUMfqLSoLHgtoACKVVrKL5q20IRwQJ8AsYPSvIeH54ORSsx2b6oyYGwbSKMDDIKpTYnC3l1-qLLLAaE0RDVWk&usqp=CAE" alt="Pantalon" marca="Liviano pal verano" precio="$20.000" onAgregarAlCarrito={agregarAlCarrito}/>
        </section>
    </div>
);
}
