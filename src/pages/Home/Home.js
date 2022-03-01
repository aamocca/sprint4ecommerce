import "./Home.css";
import caja from "./package-variant-closed.svg";
import tienda from "./store.svg";

const Home = () => {
  return (
    <>
      <section className="homeOrden">
        <div className="nombres">
          <imagen src={caja} />
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
          <imagen src={tienda} />
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
