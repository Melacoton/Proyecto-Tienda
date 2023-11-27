import React from'react';
import Tarjeta from '../Tarjeta';
import Menu from '../Menu';


export default function Accesorios(){


    const agregarAlCarrito = (producto) => {
        console.log('Agregado al carrito:', producto);
          };
       
    return(
        <div>
            <Menu/>
        <h1 className="Titulo">ACCESORIOS</h1>
            <hr/>
            <section className="cont1">
            <Tarjeta id={1} img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRnRCIHhVN0c25Tf-ONwzHtDtgArlmq8x6tdUtGUxAmo1W111HY4diZ6mWc_55JjAV9FL6YIimsxYSX0J3Sc7j-Jv6N5glIqZzp1AEPzm8&usqp=CAE" alt="Anteojos" marca="90 47 Street"  precio="$10.000" onAgregarAlCarrito={agregarAlCarrito}/>
            <Tarjeta id={2} img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTXpZB0CGrtxFj0zUrk3A7_1FL_RCIW8T--sOmLnd8CPCQTSUcNLYSC68G7p5eaaj181qNvFhinAm-qEiCAfveJkerSPmZeYMyb2NRk3v4BEsIrh-rT_HhQ1A&usqp=CAE" alt="Gorra" marca="Gorra Snapback"  precio="$5.000" onAgregarAlCarrito={agregarAlCarrito}/>
            <Tarjeta id={3} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgK4G-sEQa3s9sH8I6NXiqvUVyQm5iZbH7PA&usqp=CAU" alt="Mochila" marca="Mochila shopper"  precio="$30.000" onAgregarAlCarrito={agregarAlCarrito}/>
            <Tarjeta id={4} img="https://www.dior.com/couture/ecommerce/media/catalog/product/6/z/1691660716_30MTS8UXR_10A1_E03_GH.jpg" alt="Lentes Dior" marca="Lentes DIOR S8U"  precio="$40.000" onAgregarAlCarrito={agregarAlCarrito}/>
            </section>
    
    
            <br/>
            <br/>
            <br/>
    
    
            <section className="cont1">
            <Tarjeta id={5} img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRcI_gWiGA3QXytLVR-6UNPkl0Lznfhwfh2WnS0aVa__Akow3vT-YMRZZAavGwx_6iwpdS4hMkbRtQJMLCPAIxAE1YqN8_JMX36XeHtUxPC3SqZowmwLAOoR7vS&usqp=CAE" alt="Gorra" marca="Gorra cap Everlast"  precio="$20.000" onAgregarAlCarrito={agregarAlCarrito}/>
            <Tarjeta id={6} img="data:image/jpeg;base64,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" alt="pulseras" marca="Pulseras artesanal"  precio="$3.000" onAgregarAlCarrito={agregarAlCarrito}/>
            <Tarjeta id={7} img="https://media.vogue.es/photos/5d234bd0d6858a79777529c8/master/w_1600%2Cc_limit/1553613868_B0961ADRCO_D066_E01_ZH.jpg" alt="pulseras" marca="pulseras artesanal"  precio="$3.000" onAgregarAlCarrito={agregarAlCarrito}/>
            <Tarjeta id={8} img="https://falabella.scene7.com/is/image/FalabellaPE/gsc_117178894_1691732_1?wid=800&hei=800&qlt=70" alt="Mangas" marca="Mangas"  precio="$3.000" onAgregarAlCarrito={agregarAlCarrito}/>
            </section>
        </div>
    );
    }
    


