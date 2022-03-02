import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsNew.css";

const ProductsNew = () => {
  const HandleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3030/api/products/new", {
        nombre: nombre.current.value,
        valor: valor.current.value,
        stock: stock.current.value,
        descripcion: descripcion.current.value,
        tienda: tienda.current.value,
        id: id.current.value,
        img: img.current.value,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  let nombre = useRef();
  let valor = useRef();
  let stock = useRef();
  let descripcion = useRef();
  let tienda = useRef();
  let id = useRef();
  let img = useRef();

  return (
    <>
      <form>
        <label className="textos" name="nombre">Nombre</label>
        <input className="inputNew" type="text" name="nombre" ref={nombre}></input>
        <label className="textos"  name="valor">Valor</label>
        <input className="inputNew" type="text" name="valor" ref={valor}></input>
        <label className="textos"  name="stock">Stock</label>
        <input className="inputNew" type="text" name="stock" ref={stock}></input>
        <label className="textos"  name="descripcion">Descripción</label>
        <input className="inputNew" type="text" name="descripcion" ref={descripcion}></input>
        <label className="textos" name="tienda">Tienda</label>
        <input className="inputNew" type="text" name="tienda" ref={tienda}></input>
        <label className="textos" name="id">Id</label>
        <input className="inputNew" type="text" name="id" ref={id}></input>
        <h4>Galeria de imagenes</h4>
        <label className="textos" name="imagen">Imagen</label>
        <input className="inputNew" type="text" name="imagen" ref={img}></input>
      </form>
      <div className="buttonsNew">
        <Link to="/products">
              <button className="enviar">Cancelar</button>
              </Link>
        <button className="enviar"
          onClick={(e) => {
            HandleSubmit(e);
          }}
        >
          Enviar
        </button>
      </div>
    </>
  );
};

export default ProductsNew;
