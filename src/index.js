import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Categorias from "./rutas/Categorias";
// Subrutas de Categorias
import Accesorios from "./subrutas/Accesorios";
import Abrigos from "./subrutas/Abrigos";
import Remerones from "./subrutas/Remerones";
import Joggins from "./subrutas/Joggins";
import Bermudas from "./subrutas/Bermudas";
import Zapatillas from "./subrutas/Zapatillas";
import SALE from "./subrutas/SALE";
import NewTemp from "./subrutas/NewTemp";


import Form from "./Form";
import MiCarrito from "./rutas/MiCarrito";
import Error from "./rutas/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },


  {
    path: "/Categorias", // Ruta de Categorias
    element: <Categorias />
  },




  {
    path: "/Categorias/Accesorios", // Subruta de Accesorios
    element: <Accesorios />
  },


  {
    path: "/Categorias/Abrigos", // Subruta de Abrigos
    element: <Abrigos />
  },


  {
    path: "/Categorias/Remerones", // Subruta de Remerones
    element: <Remerones />
  },


  {
    path: "/Categorias/Joggins", // Subruta de Joggins
    element: <Joggins />
  },


  {
    path: "/Categorias/Bermudas", // Subruta de Bermudas
    element: <Bermudas />
  },


  {
    path: "/Categorias/Zapatillas", // Subruta de Zapatillas
    element: <Zapatillas />
  },


  {
    path: "/Categorias/SALE", // Subruta de SALE
    element: <SALE />
  },


  {
    path: "/Categorias/NewTemp", // Subruta de Nueva Temporada
    element: <NewTemp />
  },

  {
    path: "/Login", // Ruta de Login
    element: <Form />
  },


  {
    path: "/MiCarrito", // Ruta de Login
    element: <MiCarrito />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {}
    <RouterProvider router={router}/>
  </React.StrictMode>
 );


 // ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


