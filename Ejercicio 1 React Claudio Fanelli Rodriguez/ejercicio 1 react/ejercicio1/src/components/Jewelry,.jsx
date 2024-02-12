import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './Header';


function Home() {

  let token = localStorage.getItem('token');

  const [ products, setProducts ] = useState([]);

    useEffect (()=>{
        const endPoint = 'https://fakestoreapi.com/products/category/jewelery';
        products.get(endPoint)
        .then(response =>{
          const apipData = response.data; 
          setProducts(apipData)
        })
    }, [products, setProducts]);


  return (
    <>
    {React}
    {Header}

      { !token && <Navigate to='/' /> }

      { !setProducts && 
        <>
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                
            </div>
            
        </div>
        <span className="sr-only" >Recarga</span>
        </>
       }

       <div className='header__mb'> 
       </div>
      
      
      <div className='row  '>
      {
        products.map((el, i) =>{
          return (
            
            <div className='col-12 col-lg-3 col-md-6 ' key={i}>
            <div className="card card__xtra">
              <div className='card__imgcontainer'>
              <img src={el.image} className="card-img-top" alt={el.title} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{el.title.substring(0, 15)}...</h5>
              <p className="card-text">{el.description.substring(0, 45)}...</p>
              <p className="card-price">{el.price.substring(0,100)}....</p>
              </div>
            </div>
            </div>
            
          )
        })
      }
 
      
    </div>
   
    
    </>
  )
}

export default Home