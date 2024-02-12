

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Encabezado from "./components/Encabezado/header";
import Abajo from "./components/Abajo/footer";
import Cuerpo from "./components/Cuerpo/items";
import Electronics from "./components/Electronics";
import Jewelery from "./components/Jewelery";
import Men from "./components/Men";
import Women from "./components/Women";
import Banner from "./components/Banner/Banner"

function App() {


  return (
    <>
   
   <Encabezado/>
    <Banner/>
    <Cuerpo/>
    <Abajo/>    
   
      <Routes>
        <Route exact path="/Encabezado" element={<header/>} />
        <Route path="./cuerpo" element={<items/>} />
        <Route path="./Abajo" element={<footer/>} />
        <Route path="./electronics" element={<Electronics/>} />
        <Route path="./jewelery" element={<Jewelery/>} />
        <Route path="./men" element={<Men/>} />
        <Route path="./women" element={<Women/>} />
      </Routes>
  
    </>
  );
}

export default App
