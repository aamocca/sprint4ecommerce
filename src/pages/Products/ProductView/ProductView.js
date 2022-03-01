import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductView.css";


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
    <div className="detalleProducto">
      <Link to={`/products`}>
        <button>Volver</button>
      </Link>

      
      <h1>Información</h1>
      <form ref={formulario} style={{}}>
      <section className="npInformacion">
        <label className="textos" name="nombre">Nombre</label>
        <input className="inputProduct"
          type="text"
          name="nombre"
          placeholder={vistaProducto.title}
        ></input>
        <label className="textos" name="value">Valor</label>
        <input className="inputProduct"
          type="text"
          name="value"
          placeholder={vistaProducto.price}
        ></input>
        <label className="textos" name="stock">Stock</label>
        <input className="inputStock"
          type="text"
          name="stock"
          placeholder={vistaProducto.stock}
        ></input>
        <label className="textos" name="descripcion">Descripción</label>
        <input className="inputDescripcion"
          type="text"
          name="descripcion"
          placeholder={vistaProducto.description}
        ></input>
        <label className="textos" name="shop">Tienda</label>
        <input className="inputProduct" type="text" name="shop"></input>
        <h1>Galería de imágenes</h1>
        <img src={vistaProducto.image} width={"50px"} height={"50px"}></img>
        <label className="textos" name="imagen">Nueva imagen</label>
        <input className="inputProduct" type="text" name="imagen"></input>
        <label className="textos" name="imagenes">Imagenes actuales</label>
        <input className="imagenProducto"
          type="text"
          name="img1"
          placeholder={vistaProducto.title}
        ></input>
        <input className="imagenProducto" 
          type="text"
          name="img2"
          placeholder={vistaProducto.title}
        ></input>
        <input className="imagenProducto"
          type="text"
          name="img3"
          placeholder={vistaProducto.title}
        ></input>

        <div>
        <button className="buttons"
          onClick={(e) => {
            e.preventDefault();
            PostChanges();
          }}
        >
          Cancelar
        </button>
        <button className="buttons">Guardar</button>
        </div>
      </section>
      </form>
    </div>
    </>
  );
};

export default ProductView;
