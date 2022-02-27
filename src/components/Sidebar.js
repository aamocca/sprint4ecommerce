import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <p>Esto es un sidebar</p>
      <Link to="/products">Listas</Link>
      <Link to="/">Home</Link>
      {/* <Link to="/products/:id">Product</Link> */}
      <Link to="/products/new">New</Link>
    </>
  );
};

export default Sidebar;
