import "./Home.css";
import caja from "./package-variant-closed.svg";
import tienda from "./store.svg";
import { DarkMode } from "../../context/DarkModeContext";
import { useContext } from "react";

const Home = () => {
  const {darkMode}= useContext(DarkMode);
  return (
    <>
      <section className={ darkMode ? "homeOrden--BgColorDark"  : "homeOrden"}>
        <div className="nombres">
          <img src={caja} />
          <p>123</p>
          <p>Productos</p>
        </div>
        <div className="botones">
          <button className="btnLst">Ver Listado</button>
          <button className="addPrd">Agregar Producto</button>
        </div>
      </section>

      <section className="homeOrden2">
        <div className="nombres">
          <img src={tienda} />
          <p>10</p>
          <p>Tiendas</p>
        </div>
        <div className="botones">
          <button className="btnLst">Ver Listado</button>
          <button className="addPrd">Agregar Tienda</button>
        </div>
      </section>
    </>
  );
};

export default Home;
