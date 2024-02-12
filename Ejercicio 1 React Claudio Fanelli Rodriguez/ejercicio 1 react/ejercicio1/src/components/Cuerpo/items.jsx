import React from "react";

import Cuerpo from "./components/Cuerpo/datos"
import { useState } from "react";

function items() {

  const token =localStorage.getItem('token');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isPcBody,setisBody]= useState(false);

  const clickHandler=(e)=>{
      e.preventDefault();

      if (token!==null){
        localStorage.clear()
        return;


      }
    
}

  return (
    <>
   
    {React}
    {Cuerpo}

      <body>
      <a>
            
            <ul className={isPcBody? 'nav-links-mobile' : "navbar-nav nav__itemsXtra"} onClick={()=> setisBody(false)}>
                <li className="nav-item"><a to='/electronics' className='nav-link active'>Electronics</a></li>
                <li className="nav-item"><a to='/jewelery' className='nav-link active'>Jewelery</a></li>
                <li className="nav-item"><a to='/men' className='nav-link active'>Men Clothes</a></li>
                <li className="nav-item"><a to='/women' className='nav-link active'>Women Clothes</a></li>
                <li className="nav-item" onClick={clickHandler} >
                   
                  
                </li>
              
            </ul>
           
            <button className='mobile-menu-icon' onClick={()=> setisBody(!isPcBody)}>
                {isPcBody? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>
            </a>
            </body>
     
    </>



        
  
  )
  
}
  
export default items