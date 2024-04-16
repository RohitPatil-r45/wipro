import React from "react";
import Product from "./Product";

const ProductsList = ({ products }) => {
  return (
    <table>
      <thead>
        <th>ID</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
      </thead>
      <tbody>
        {products.map((item) => {
          return <Product item={item} key={item.id} />;
        })}
      </tbody>
    </table>
  );
};

export default ProductsList;
