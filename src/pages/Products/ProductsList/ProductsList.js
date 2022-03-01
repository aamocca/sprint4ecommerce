import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import chevron from "../../../assets/img/chevronright.svg";
import lupe from "../../../assets/img/magnify.svg";
import ProductView from "../ProductView/ProductView";
import { Link } from "react-router-dom";
import "./ProductsList.css";

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3030/api/products").then((res) => {
      //console.log(res.data);
      setProductos(res.data);
    });
  }, []);
  console.log(productos);

  async function GetProduct(url) {
    let response = await fetch("http://localhost:3030/api/" + url);
    let data = await response.json();
    setSelectedProduct(data);
    console.log(data);
  }

  let palabra = useRef();

  function HandleSubmit(e) {
    e.preventDefault();
    setIsFiltering(true);
    setProductosFiltrados(
      productos.filter((producto) =>
        producto.title.includes(palabra.current.value)
      )
    );
  }

  return (
    <>
      <form>
      <label className="BotonBusqueda" name="productname">
          Buscar producto
        </label>
        <input
          className="buscador"
          placeholder="Buscar Productos..."
          type="text"
          ref={palabra}
          name="productoname"
        ></input>
        <button
          className="BotonBusqueda"
          onClick={(e) => {
            HandleSubmit(e);
          }}
        >
          Buscar
        </button>
      </form>

      {!selectedProduct ? (
        // {

        !isFiltering ? (
          productos.map((producto, i) => {
            return (
              <Link to={`/products/${producto._id}`}>
                <div className="productoInd">
                  <section className="productImg">
                  <img
                    src={producto.image}
                    width={"70px"}
                    height={"70px"}
                    />
                  </section>
                  <section className="productText" style={{ textDecoration: "none", color: "#000" }}>
                  <p style={{ textDecoration: "none"}}>{producto.title}</p>
                  <p>{producto.id}</p>
                  <p>{producto.price}</p>
                  </section>
                  <section className="chevronFlecha">
                    <img
                      src={chevron}
                      width={"70px"}
                      height={"70px"}
                      onClick={() => {
                       GetProduct(producto._id);
                       }}
                    />
                  </section>
                </div>
              </Link>
            );
          })
        ) : (
          <>
            {productosFiltrados.map((producto, i) => {
              return (
                <Link to={`/products/${producto._id}`}>
                  <div className="productoInd">
                    <section className="productImg">
                    <img src={producto.image} width={"70px"} height={"70px"} />
                    </section>
                    <section className="productText">
                    <p>{producto.title}</p>
                    <p>{producto.id}</p>
                    <p>{producto.price}</p>
                    </section>
                    <section className="chevronFlecha">
                    <img
                      src={chevron}
                      width={"70px"}
                      height={"70px"}
                      onClick={() => {
                        GetProduct(producto._id);
                      }}
                      />
                      </section>
                  </div>
                </Link>
              );
            })}
          </>
        )
      ) : (
        // }

        <>
          <button
            onClick={() => {
              setSelectedProduct(null);
            }}
          >
            Volver
          </button>
          <p>{selectedProduct.title}</p>
        </>
      )}
    </>
  );
};

export default ProductList;
