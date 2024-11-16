import React from 'react';

const ProductCard = ({product, handleRemove}) => {
  return (
    <div className="product-card">
      <img src={product.image} width={100} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="delete-btn" 
      onClick={() => handleRemove(product.id)}
      >Delete</button>
  </div>
  );
};

export default ProductCard;