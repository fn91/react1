import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Encabezado from "./components/Encabezado/header";
import Abajo from "./components/Abajo/footer";
import Cuerpo from "./components/Cuerpo/items";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {App}
    {Encabezado}
    {Abajo}  
    {Cuerpo} 

       
  </React.StrictMode>,
)
