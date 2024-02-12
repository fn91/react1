


import React from "react";
import './header.css'
import UserIcon from "../../icons/CartIcon.svg";
import LikeIcon from "../../icons/LikeIcon.svg";
import CartIcon from "../../icons/UserIcon.svg";

function header() {
  const whiteIconStyle ={filter: "invert(100%)"};

  return (
    <>
    {React}
    <header>
      <nav>
    <ul>
    <li>
      <h1>Mitienda</h1>
    </li>
      <li>INICIO</li>
      <li>CATEGORIAS</li>
      <li>OFERTAS</li>
      <li>CONTACTO</li>
      
      <form action="../../form-result.php"
      
      method='post'
      name='BuscarProductos'
      target='blank'>
     
      <p>
      <input type="search" 
      size="60" maxLength="20"></input>
      
      <input type="submit" value="Buscar"></input>
      

        
      </p>


      </form>
      <ul className="user-icons">
        <li className="user-icons">
        <img src ={UserIcon} alt="" style={whiteIconStyle}/>
        </li>

        <li className="like-icon">
        <img src ={LikeIcon} alt="" style={whiteIconStyle}/>
        </li>

        <li className="card-icon">
        <img src ={CartIcon} alt="" style={whiteIconStyle}/>
        </li>
       

       
        </ul>



    </ul>
    </nav>

    </header>
     
        
    </>
  );
}

export default header