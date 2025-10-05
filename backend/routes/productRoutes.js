import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// 🟢 GET /api/products - Fetch all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

// 🟢 POST /api/products - Add a new product
router.post("/", async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const newProduct = new Product({ name, description, price });
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: "Failed to add product" });
  }
});

// 🔴 DELETE /api/products/:id - Delete a product by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product" });
  }
});

export default router;
