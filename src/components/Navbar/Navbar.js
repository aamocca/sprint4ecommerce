import { Link } from "react-router-dom";

function Navbar() {
  return (

    <>
    <div className="navbar"> 
       
      <Link to="/products">Listas</Link>
      <Link to="/">Home</Link>
      <Link to="/products/:id">Product</Link>
      <Link to="/products/new">New</Link>
    </div>
    </>
  );
};

export default Navbar;
