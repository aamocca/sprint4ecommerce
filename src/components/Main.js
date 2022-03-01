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
        <Route
          path="*"
          element={<p>Error 404. No encontramos la pagina que buscas BB</p>}
        />
      </Routes>
      <Navbar />
      <MenuAdmin />
    </>
  );
};

export default Main;
