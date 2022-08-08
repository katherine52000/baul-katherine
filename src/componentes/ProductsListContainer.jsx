import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArrayProducts from "./data/productos.json"
import ProductList from './ProductList'


const Promesa = new Promise((res, rej) => {
  setTimeout(() => {
    res(ArrayProducts)

  }, 2000)
})
export function ProductsListContainer() {
  const [productos, setProductos] = useState([])
  const { titleProducts } = useParams()

  console.log(titleProducts)

  useEffect(() => {
    if (titleProducts) {
      Promesa 
        .then(ArrayProducts => setProductos(ArrayProducts.filter(elements => elements.category == titleProducts)))
    } else {
      Promesa
        .then((ArrayProducts) => setProductos(ArrayProducts))

        .catch((err) => console.log(err));


    }




  }, [titleProducts])


  // console.log(productos)

  return (
    <ProductList productos={productos} />


  )
}