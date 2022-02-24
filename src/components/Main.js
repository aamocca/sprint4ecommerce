import { Routes, Route } from "react-router-dom";
import ProductList from "../pages/Products/ProductsList/ProductsList";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/ListaProducto" element={<ProductList />} />
      </Routes>
    </>
  );
};

export default Main;
