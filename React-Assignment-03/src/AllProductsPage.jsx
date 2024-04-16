import React from "react";
import ProductsList from "./ProductsList";
import { useState } from "react";
import { useEffect } from "react";

const AllProductsPage = () => {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Moto G5",
      quantity: "2",
      price: 13000,
    },
    {
      id: "2",
      name: "Racolf Geyser",
      quantity: "3",
      price: 6000,
    },
    {
      id: "3",
      name: "Dell Inspiron",
      quantity: "4",
      price: 50000,
    },
  ]);
  const getProducts = async () => {
    const res = await fetch("http://localhost:8000/products");
    const data = await res.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <ProductsList products={products} />
    </div>
  );
};

export default AllProductsPage;
