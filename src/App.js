import React, { useState, useEffect, useMemo } from 'react';
import './style.css';
import ProductList from './components/ProductList'

export default function App() {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    fetch('https://62d92de95d893b27b2dfeae8.mockapi.io/products/all')
      .then((resp) => resp.json())
      .then((products) => setProducts(products.products));
  }, []);

  let productslist = [];

  const filteredProducts = useMemo(() => {
    return products?.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  if (products && !filter) {
    productslist = products;
  } else if (products && filter) {
    productslist = filteredProducts;
  }else {
    productslist = []
  }
  return (<> 
   <h1>Products List</h1>

<label style={{ display: 'flex', flexDirection: 'column', gap:'5px' }}>
  {' '}
  Filter
  <input
    type="text"
  
    value={filter}
    style={{ marginBottom: '20px',  borderRadius: '10px', padding: '5px',  maxWidth: '300px',}}
    onChange={(e) => setFilter(e.target.value)}
  />
</label>

<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
  {productslist && <ProductList products={productslist}/>
}
</div>
  </>)

}