import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "antd/dist/reset.css"; // Ant Design CSS
import "./App.css";

createRoot(document.getElementById("root")).render(<App />);
