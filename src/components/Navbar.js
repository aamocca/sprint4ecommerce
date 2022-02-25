import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductList from "../pages/Products/ProductsList/ProductsList";

const Navbar = ({show}) => {
  return (
    <div className={!show ? 'sidenav active' : 'sidenav'}>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/products">Productos</Link>
        </li>
        <li>
          <Link to="*">Tiendas</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
