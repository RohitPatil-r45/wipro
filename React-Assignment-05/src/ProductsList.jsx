import React from "react";
import Product from "./Product";

const ProductsList = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
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
