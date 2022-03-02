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
          <img className=" objetos"  src={caja} />
          <p className="objetos" >123</p>
          <p className="objetos" >Productos</p>
        </div>
        <div className="botones">
          <button className="btnLst">Ver Listado</button>
          <button className="addPrd">Agregar Producto</button>
        </div>
      </section>

      <section className="homeOrden">
        <div className="nombres">
          <img className="objetos" src={tienda} />
          <p className="objetos" >10</p>
          <p className="objetos" >Tiendas</p>
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
