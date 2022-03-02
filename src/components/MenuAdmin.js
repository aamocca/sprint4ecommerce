import "../css/MenuAdmin.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import "../header.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductList from "../pages/Products/ProductsList/ProductsList";
import ProductView from "../pages/Products/ProductView/ProductView";
import ProductsNew from "../pages/Products/ProductsNew/ProductsNew";
import Header from "./Header";
import home from "../img/home.svg";
import caja from "../img/package-variant-closed.svg"
import tienda from "../img/store.svg"

const MenuAdmin = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="menuAdmin">
        {/* <section className="sideBar2">
          <div className="App">
            <header>
              <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
            </header>
            <Navbar show={showNav} />
          </div>
        </section> */}

        <section className="sideBar">
        
          <h1>MiEcommerce</h1>

          <div className="menus SbInicio">
          <img className="imagen" src={home} />
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            
              Inicio
            </Link>
          </div>
          <div className="menus SbProductos">
          <img className="imagen" src={caja} />
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Productos
            </Link>
          </div>
          <div className="menus SbTiendas">
          <img className="imagen" src={tienda} />
            <Link to="*" style={{ textDecoration: "none", color: "#000" }}>
              Tiendas
            </Link>
          </div>
        </section>
        <section className="mainArea">
        <Header />
          {/* Aqui va el header */}

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
