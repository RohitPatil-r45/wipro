import React from "react";
import ProductsList from "./ProductsList";
import { useGlobalContext } from "./Context";

const AllProductsPage = () => {
  const { products } = useGlobalContext();
  return (
    <div>
      <h1>Product List (using Functional Components)</h1>
      <ProductsList products={products} />
    </div>
  );
};

export default AllProductsPage;
