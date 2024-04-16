import React from "react";
import ProductsList from "./ProductsList";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

const AllProductsPage = () => {
  const { products } = useGlobalContext();
  return (
    <div>
      <h1>Product List</h1>
      <ProductsList products={products} />
      <Link to="/addProduct">Add Product</Link>
    </div>
  );
};

export default AllProductsPage;
