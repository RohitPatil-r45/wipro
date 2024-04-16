import React from "react";

const Product = ({ item }) => {
  const { name, quantity, price } = item;
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>Rs. {price}</td>
    </tr>
  );
};

export default Product;
