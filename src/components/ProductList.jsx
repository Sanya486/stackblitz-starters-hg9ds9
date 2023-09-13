import React from 'react'
import Product from './Product'

function ProductList({products}){
  return <>
  {products.map(product=> <Product key={product.asin} product={product} />)}</>
}

export default ProductList