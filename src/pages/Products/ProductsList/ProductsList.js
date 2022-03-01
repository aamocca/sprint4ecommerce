import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import chevron from "../../../assets/img/chevronright.svg";
import ProductView from "../ProductView/ProductView";
import { Link } from "react-router-dom";

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

    // const nombre = palabra.current.value;
    // console.log(nombre);
    // const setProductos = productos.filter((producto) => producto.title);
    // console.log(result);
    // if (nombre === result) {
    //   console.log(result);
    // }
  }

  // let data = await response.json();
  // setSelectedProduct(data.title);
  // console.log(data);

  return (
    <>
      <Link to="/products/new">
        <button>Agregar</button>
      </Link>
      <form>
        <label name="productname">Buscar producto</label>
        <input type="text" ref={palabra} name="productoname"></input>
        <button
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "30px",
                    borderRadius: "12px",
                    justifyContent: "space-evenly",
                    border: "2px solid black",
                  }}
                >
                  <img src={producto.image} width={"50px"} height={"50px"} />
                  <p>{producto.title}</p>
                  <p>{producto.id}</p>
                  <p>{producto.price}</p>
                  <img
                    src={chevron}
                    onClick={() => {
                      GetProduct(producto._id);
                    }}
                  />
                </div>
              </Link>
            );
          })
        ) : (
          <>
            {productosFiltrados.map((producto, i) => {
              return (
                <Link to={`/products/${producto._id}`}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "30px",
                      borderRadius: "12px",
                      justifyContent: "space-evenly",
                      border: "2px solid black",
                    }}
                  >
                    <img src={producto.image} width={"50px"} height={"50px"} />
                    <p>{producto.title}</p>
                    <p>{producto.id}</p>
                    <p>{producto.price}</p>
                    <img
                      src={chevron}
                      onClick={() => {
                        GetProduct(producto._id);
                      }}
                    />
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
