import { useContext } from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
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
    <AppContext.Provider value={{ products, setProducts, getProducts }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
