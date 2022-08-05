import React from 'react'
import Card from './Cards'
import Cards from "./css/Cards.css"


const ProductList = ({ productos }) => {
    return (
        <div  id="productos-card">
      {
        productos.map((producto)=> <Card producto={producto}/>)
      }
        </div>
    )
}

export default ProductList