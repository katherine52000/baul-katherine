import React from 'react'
import Contador from "./Contador"
import CartIcon from "./svg/cart-arrow-down-solid.svg"




export const VistaProductos = ({ producto }) => {

  return (
    <>
      <div className='container text-center'>
        <div className='row row-cols-2'>
          <div className="col">
            <img src={producto.image} alt={producto.title} height="400px" width="400px" />
          </div>
          <div className='col'>
            <h4 className='text-uppercase text-black-50'>{producto.category}</h4>
            <h1 className='display-5'>{producto.title}</h1>
            <h6>ADD TO CAR</h6>
            
    <img src={CartIcon} alt="" width="20"/>

    <div><Contador/></div>
          </div>
        
        </div>

      </div>

    </>
  )
}
