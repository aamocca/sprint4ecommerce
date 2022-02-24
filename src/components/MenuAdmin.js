import "../css/MenuAdmin.css";
import { Link } from "react-router-dom";

const MenuAdmin = () => {
  return (
    <>
      <div className="menuAdmin">
        <section className="sideBar">
          <h1>MiEcommerce</h1>

          <div className="SbInicio">
            <Link to="/">Inicio</Link>
          </div>
          <div className="SbProductos">
            <Link to="/products">Productos</Link>
          </div>
          <div className="SbTiendas">
            <Link to="*">Tiendas</Link>
          </div>
          <div className="imgOlivia">
            <p>La olivia</p>
          </div>
        </section>
        <section className="mainArea">
          <h1>Main Area</h1>
        </section>
      </div>
    </>
  );
};

export default MenuAdmin;
