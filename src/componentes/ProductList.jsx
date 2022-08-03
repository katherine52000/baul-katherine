import React from 'react'
import Card from './Cards'


const ProductList = ({ productos }) => {
    return (
        <div>
      {
        productos.map((producto)=> <Card producto={producto}/>)
      }
        </div>
    )
}

export default ProductList