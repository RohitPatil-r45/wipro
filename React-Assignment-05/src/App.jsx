import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About, { Nav } from "./About";
import AllProductsPage from "./AllProductsPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={"/"} element={<About />} />
        <Route path={"/products"} element={<AllProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
