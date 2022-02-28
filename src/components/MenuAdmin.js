import "../css/MenuAdmin.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import "../header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductList from "../pages/Products/ProductsList/ProductsList";
import ProductView from "../pages/Products/ProductView/ProductView";
import ProductsNew from "../pages/Products/ProductsNew/ProductsNew";

const MenuAdmin = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="menuAdmin">
        <section className="sideBar2">
          <div className="App">
            <header>
              <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
            </header>
            <Navbar show={showNav} />
          </div>
        </section>

        <section className="sideBar">
          <h1>MiEcommerce</h1>

          <div className="menus SbInicio">
            <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
              Inicio
            </Link>
          </div>
          <div className="menus SbProductos">
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              Productos
            </Link>
          </div>
          <div className="menus SbTiendas">
            <Link to="*" style={{ textDecoration: "none", color: "#FFF" }}>
              Tiendas
            </Link>
          </div>
          <div className="menus imgOlivia">
            <p>La olivia</p>
          </div>
        </section>
        <section className="menus mainArea">
          {/* Aqui va el header */}
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
          <h1>Main Area</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </section>
      </div>
    </>
  );
};

export default MenuAdmin;
