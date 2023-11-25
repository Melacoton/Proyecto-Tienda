import React from 'react';
import './Archivos css/categorias.css';

//lo pongo asi para que ya quede dsp lo cambiamos de lugar cuando este lo de las rutas
function Categorias(){
    return(
    /*Creamos secciones dentro de la etiqueta main que contengan las diferentes categorias*/ 
    /*Cada seccion tiene tres divs porque separamos cada tres categorias, 
    cada categoria tiene una imagen y un titulo*/
    <main>
    <section className="cont1">
        <div className="cate">
            <img className="articulo" src="https://woker.vtexassets.com/arquivos/ids/178124-800-800?v=637388078563630000&width=800&height=800&aspect=true" alt="..."/>
            <div>
                <h4>Zapatillas</h4>
                <button className="bCompra"><a href='Carrito'>Agregar al carrito</a></button>
            </div>
        </div>

        <div className="cate">
            <img class="articulo" src="data:image/jpeg;base64,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" alt="..."/>
            <div>
                <h4>Pantalones/joggins</h4>
                <button className="bCompra"><a href='Carrito'>Agregar al carrito</a></button>
            </div>
        </div>

        <div className="cate">
            <img className="articulo" src="https://www.tiendaganga.com/wp-content/uploads/2023/02/remeras-con-estampados-scaled.webp" alt="..."/>
            <div>
                <h4>Remeras oversize</h4>
                <button className="bCompra"><a href='Carrito'>Agregar al carrito</a></button>
            </div>
        </div>
        </section>
</main>
);
};

export default Categorias;