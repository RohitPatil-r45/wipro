import React from "react";

const Product = ({ item }) => {
  const { id, name, quantity, price } = item;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>Rs. {price}</td>
    </tr>
  );
};

export default Product;
