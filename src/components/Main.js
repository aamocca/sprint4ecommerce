import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductList from "../pages/Products/ProductsList/ProductsList";
import ProductView from "../pages/Products/ProductView/ProductView";
import ProductsNew from "../pages/Products/ProductsNew/ProductsNew";
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="/products/new" element={<ProductsNew />} />
      </Routes>
    </>
  );
};

export default Main;
