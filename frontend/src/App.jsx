import React, { useEffect, useState } from "react";
import { api } from "./api";
import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";

export default function App() {
  const [products, setProducts] = useState([]);

  // Fetch products on mount
  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product
  const addProduct = async (product) => {
    try {
      const res = await api.post("/products", product);
      setProducts((prev) => [res.data, ...prev]); // prepend new product
    } catch (err) {
      console.error(err);
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Mini Vendor Catalog</h1>
      <AddProductForm onAdd={addProduct} />
      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
}
