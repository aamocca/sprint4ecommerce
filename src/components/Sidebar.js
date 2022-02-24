import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <p>Esto es un sidebar</p>
      <Link to="/ListaProducto">Listas</Link>
    </>
  );
};

export default Sidebar;
