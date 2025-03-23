import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our Store</h1>
      <p>Browse our products and enjoy your shopping experience!</p>
      <Link to="/product/1" className="product-link">View Product</Link>
    </div>
  );
}