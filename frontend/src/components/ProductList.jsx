import React from "react";

export default function ProductList({ products, onDelete }) {
  if (!products.length) return <p>No products available.</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><strong>₹{product.price}</strong></p>
          <button onClick={() => onDelete(product._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
