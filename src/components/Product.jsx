import React from 'react';

const urlImage = "http://localhost:1337";

const Product = ({ product, handleAddToCart }) => (
    <div className="Products-item">
      <img src={`${urlImage}${product.image.data[0].attributes.url}`} alt={product.title} />
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );

export default Product;
