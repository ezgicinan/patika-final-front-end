import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/productService';
import ProductCard from './ProductCard';
import Loading from './Loading';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    setIsLoading(true);
    const response = await fetchProducts();
    console.log(response);
    setTimeout(() => {
      setProducts(response.data) // set state, save data to state
      setIsLoading(false);
    }, 500);
  }

  useEffect(() => { // lifecycle of component
    getProducts();
  }, []); // dependicies

  if (isLoading) {
    return <Loading />; // Yükleniyor bileşeni
  }

  const handleRemove = (id) => {
    console.log('remove id', id);
    const remainingItems = products.filter(item => item.id !== id);
    setProducts(remainingItems);
  }

  return (
    <div>
      <div>
        <h1>Product List:</h1>
          <div className="product-list">
            {products.map(product => {
              return (
                <ProductCard
                  product={product}
                  name="patika" key={product.id}
                  handleRemove={handleRemove}
                />
              )
            })}
          </div>
      </div>   
    </div>
  );
};

export default ProductList;