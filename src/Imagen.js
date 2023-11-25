import React from 'react';
import './Archivos css/imagen.css';

export default function Imagen(){
    return(
        /*Creamos un div con una imagen decorativa dentro y poderle dar estilo con css*/
        <div className="imagen">
            <img src="2.jpg" alt="imagen decorativa"/>
        </div>
    );
};
