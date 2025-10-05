import mongoose from "mongoose";

// Define the product schema (structure of each product document)
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

// Create a model named 'Product' using the schema
const Product = mongoose.model("Product", productSchema);

export default Product;
