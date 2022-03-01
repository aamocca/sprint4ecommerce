import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <button
        onClick={(e) => {
          DeleteItem(e);
        }}
      >
        Eliminar
      </button>
      <Link to="/products">
        <button>Volver</button>
      </Link>

      <img src={vistaProducto.image} width={"50px"} height={"50px"}></img>
      <h4>Información</h4>
      <form ref={formulario} style={{}}>
        <label name="nombre">Nombre</label>
        <input
          required
          type="text"
          name="nombre"
          ref={nombres}
          placeholder={vistaProducto.title}
          onChange={(e) => setNombre(e.target.value)}
        ></input>
        <label name="value">Valor</label>
        <input
          required
          type="text"
          name="value"
          ref={valores}
          placeholder={vistaProducto.price}
          onChange={(e) => setValor(e.target.value)}
        ></input>
        <label name="stock">Stock</label>
        <input
          required
          type="text"
          name="stock"
          ref={stock}
          placeholder={vistaProducto.stock}
        ></input>
        <label name="descripcion">Descripción</label>
        <input
          required
          type="text"
          name="descripcion"
          placeholder={vistaProducto.description}
          ref={descripcion}
        ></input>
        <label name="shop">Tienda</label>
        <input type="text" name="shop" ref={tienda}></input>
        <h3>Galería de imágenes</h3>
        <label name="imagen">Nueva imagen</label>
        <input type="text" name="imagen" ref={newimg}></input>
        <label name="imagenes">Imagenes actuales</label>
        <input
          type="text"
          name="img1"
          ref={img1}
          placeholder={vistaProducto.title}
        ></input>
        <input
          type="text"
          name="img2"
          ref={img2}
          placeholder={vistaProducto.title}
        ></input>
        <input
          type="text"
          name="img3"
          ref={img3}
          placeholder={vistaProducto.title}
        ></input>

        <button>Cancelar</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            HandleSubmit(e);
          }}
        >
          Guardar
        </button>
      </form>
    </>
  );
};

export default ProductView;
