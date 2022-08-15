import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ArrayProducts from "./data/productos.json"
import {VistaProductos} from "./VistaProductos"


const ProductsDetailContainer = () => {
  const { idProducts } = useParams() //esta variable obtiene el valor dinamico de la url


  const Promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(ArrayProducts)

    }, 1000)
  })

  const [productos, setProductos] = useState([])
 
  useEffect(() => {
    Promesa
      .then((ArrayProducts) => setProductos(ArrayProducts.find((elementos)=> elementos.id == idProducts )))

      .catch((err) => console.log(err));

  }, [])

console.log(productos)
  return (
   < VistaProductos producto={productos}/>
  )
}

export default ProductsDetailContainer