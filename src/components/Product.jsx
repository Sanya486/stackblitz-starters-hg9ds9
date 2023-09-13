import React from 'react'

function Product({product}){
  return <div
  style={{
    border: '1px solid grey',
    borderRadius: '10px',
    maxWidth: '500px',
    padding: '10px',
  }}
>
  <img
    src={product.img}
    style={{
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '10px',
    }}
    width={100}
  />
  <p>{product.name}</p>
  <p>
    <strong>Category</strong>: {product.bsr_category}
  </p>
  <p>
    <strong>Price</strong>: {product.currency} {product.price}
  </p>
  <p>
    <strong>Weight</strong>: {product.weight.toFixed(2)}
  </p>
</div>
}

export default Product