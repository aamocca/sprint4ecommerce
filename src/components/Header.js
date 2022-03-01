import "../header.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./Navbar";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="headerv1">
        <section className="sideBar2">
          <div className="App ">
            <header>
              <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
            </header>
            <Navbar show={showNav} />
          </div>
        </section>
        <section className="inpBuscador">
          <h1 className="tituloMain">Bienvenida Olivia</h1>
          <button className="botonAgregar">Agregar</button>
        </section>
      </div>
    </>
  );
};

export default Header;
