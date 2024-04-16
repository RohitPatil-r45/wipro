import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About, { Nav } from "./About";
import AllProductsPage from "./AllProductsPage";
import AddProduct from "./AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={"/"} element={<About />} />
        <Route path={"/products"} element={<AllProductsPage />} />
        <Route path={"/addProduct"} element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
