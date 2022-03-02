import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import "./ProductView.css";

const ProductView = (propos) => {
  const formulario = useRef();
  const id = useParams().id;
  const [vistaProducto, setVistaProducto] = useState([]);
  const [productoOriginal, setProductoOriginal] = useState([]);
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState(null);
  const [Delete, setDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3030/api/" + id).then((res) => {
      //console.log(res.data);
      setVistaProducto(res.data);
    });
  }, []);
  console.log(vistaProducto);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put("http://localhost:3030/api/products/edit/" + id, {
        id: id,
        nombre: nombres.current.value,
        valor: valores.current.value,
        stock: stock.current.value,
        descripcion: descripcion.current.value,
        tienda: tienda.current.value,
        newimg: vistaProducto.image,
        img1: img1.current.value,
        img2: img2.current.value,
        img3: img3.current.value,
        mostwanted: vistaProducto.mostwanted,
        category: vistaProducto.category,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const DeleteItem = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3030/api/products/delete/" + id, {
        id: id,
      })
      .then((res) => console.log(res))
      .then(() => {
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };
  let nombres = useRef();
  let valores = useRef();
  let stock = useRef();
  let descripcion = useRef();
  let tienda = useRef();
  let newimg = useRef();
  let img1 = useRef();
  let img2 = useRef();
  let img3 = useRef();
  return (
    <>
      <div className="detalleProducto">
          <div>
          <Link to="/products">
            <button className="buttons">Volver</button>
          </Link>
          <button className="buttons"
            onClick={(e) => {
              DeleteItem(e);
            }}
            >
            Eliminar
          </button>
        </div>
        <div className="contProductDetalle">
          <div className="imgProduct">
            <img src={vistaProducto.image} width={"100px"} height={"100px"}></img>
          </div>
          <div className="infoProduct">
            <p>{vistaProducto.title}</p>
            <p>{vistaProducto.stock}</p>
            <p>{vistaProducto.price}</p>
          </div>
        </div>
        <h4>Información</h4>
        <section className="npInformacion">
          <form ref={formulario} style={{}}>
            <label className="textos" name="nombre">
              Nombre
            </label>
            <input
              className="inputProduct"
              required
              type="text"
              name="nombre"
              ref={nombres}
              value={vistaProducto.title}
              onChange={(e) => setNombre(e.target.value)}
            ></input>

            <label className="textos" name="value">
              Valor
            </label>
            <input
              className="inputProduct"
              required
              type="text"
              name="value"
              ref={valores}
              value={vistaProducto.price}
              onChange={(e) => setValor(e.target.value)}
            ></input>

            <label className="textos" name="stock">
              Stock
            </label>
            <input
              className="inputStock"
              required
              type="text"
              name="stock"
              ref={stock}
              value={vistaProducto.stock}
            ></input>

            <label className="textos" name="descripcion">
              Descripción
            </label>
            <input
              className="inputDescripcion"
              required
              type="text"
              name="descripcion"
              value={vistaProducto.description}
              ref={descripcion}
            ></input>

            <label className="textos" name="shop">
              Tienda
            </label>
            <input
              className="inputProduct"
              type="text"
              name="shop"
              ref={tienda}
            ></input>
            <h1>Galería de imágenes</h1>
            <img src={vistaProducto.image} width={"50px"} height={"50px"}></img>
            <label className="textos" name="imagen">
              Nueva imagen
            </label>
            <input
              className="inputProduct"
              type="text"
              name="imagen"
              ref={newimg}
            ></input>
            <label className="textos" name="imagenes">
              Imagenes actuales
            </label>
            <input
              className="imagenProducto"
              type="text"
              name="img1"
              ref={img1}
              value={vistaProducto.title}
            ></input>
            <input
              className="imagenProducto"
              type="text"
              name="img2"
              ref={img2}
              value={vistaProducto.title}
            ></input>
            <input
              className="imagenProducto"
              type="text"
              name="img3"
              ref={img3}
              value={vistaProducto.title}
            ></input>

            <div>
              <Link to="/products">
              <button className="buttons">Cancelar</button>
              </Link>
              <button
                className="buttons"
                onClick={(e) => {
                  e.preventDefault();
                  HandleSubmit(e);
                }}
              >
                Guardar
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default ProductView;
