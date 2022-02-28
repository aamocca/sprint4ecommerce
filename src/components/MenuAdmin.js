import "../css/MenuAdmin.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import "../header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import ProductList from "../pages/Products/ProductsList/ProductsList";
import ProductView from "../pages/Products/ProductView/ProductView";
import ProductsNew from "../pages/Products/ProductsNew/ProductsNew";
import Home from "../pages/Home/Home";
import { Route, Routes } from "react-router-dom";

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
            <Link to="/">Inicio</Link>
          </div>
          <div className="menus SbProductos">
            <Link to="/products">Productos</Link>
          </div>
          <div className="menus SbTiendas">
            <Link to="*">Tiendas</Link>
          </div>
          <div className="menus imgOlivia">
            <p>La olivia</p>
          </div>
        </section>
        <section className="menus mainArea">
          <Routes>
            <Route path="/products" element={<ProductList />} />
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductView />} />
            <Route path="/products/new" element={<ProductsNew />} />
          </Routes>
        </section>
      </div>
    </>
  );
};

export default MenuAdmin;
