import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductView = (propos) => {
  const formulario = useRef();
  const id = useParams().id;
  const [vistaProducto, setVistaProducto] = useState([]);
  const [productoOriginal, setProductoOriginal] = useState([]);
  const [cambio, setCambio] = useState({
    // gallery: [img1, img2, img3],
    // mostwanted: false,
    // stock: stock,
    // store: shop,
    // title: nombre,
    // price: value,
    // description: descripcion,
    // image: imagen,
    // category: "Alimentos",
    // __v: 0,
  });

  useEffect(() => {
    axios.get("http://localhost:3030/api/" + id).then((res) => {
      //console.log(res.data);
      setVistaProducto(res.data);
    });
  }, []);
  console.log(vistaProducto);

  function PostChanges() {
    useEffect(() => {
      axios.post("http://localhost:3030/api/new", formulario).then((res) => {
        setCambio(res.data);
      });
    }, []);
  }

  return (
    <>
      <button>Volver</button>
      <img src={vistaProducto.image} width={"50px"} height={"50px"}></img>
      <h4>Información</h4>
      <form ref={formulario} style={{}}>
        <label name="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder={vistaProducto.title}
        ></input>
        <label name="value">Valor</label>
        <input
          type="text"
          name="value"
          placeholder={vistaProducto.price}
        ></input>
        <label name="stock">Stock</label>
        <input
          type="text"
          name="stock"
          placeholder={vistaProducto.stock}
        ></input>
        <label name="descripcion">Descripción</label>
        <input
          type="text"
          name="descripcion"
          placeholder={vistaProducto.description}
        ></input>
        <label name="shop">Tienda</label>
        <input type="text" name="shop"></input>
        <h3>Galería de imágenes</h3>
        <label name="imagen">Nueva imagen</label>
        <input type="text" name="imagen"></input>
        <label name="imagenes">Imagenes actuales</label>
        <input
          type="text"
          name="img1"
          placeholder={vistaProducto.title}
        ></input>
        <input
          type="text"
          name="img2"
          placeholder={vistaProducto.title}
        ></input>
        <input
          type="text"
          name="img3"
          placeholder={vistaProducto.title}
        ></input>

        <button
          onClick={(e) => {
            e.preventDefault();
            PostChanges();
          }}
        >
          Cancelar
        </button>
        <button>Guardar</button>
      </form>
    </>
  );
};

export default ProductView;
