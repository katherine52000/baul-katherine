import React from 'react'


export const VistaProductos = ({producto}) => {
  
        return(
          <>
      
          <div className='col-md-6'>
            <img src={producto.image} alt={producto.title} height="400px" width="400px" />
            <div className='col-md-6'>
              <h4 className='text-uppercase text-black-50'>{producto.category}</h4>
              <h1 className='display-5'>{producto.title}</h1>
            </div>
          </div>
          </>
        )
      }
