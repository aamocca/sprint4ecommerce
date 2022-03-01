import axios from "axios";
import { useEffect, useRef, useState } from "react";

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
        <label name="nombre">Nombre</label>
        <input type="text" name="nombre" ref={nombre}></input>
        <label name="valor">Valor</label>
        <input type="text" name="valor" ref={valor}></input>
        <label name="stock">Stock</label>
        <input type="text" name="stock" ref={stock}></input>
        <label name="descripcion">Descripción</label>
        <input type="text" name="descripcion" ref={descripcion}></input>
        <label name="tienda">Tienda</label>
        <input type="text" name="tienda" ref={tienda}></input>
        <label name="id">id</label>
        <input type="text" name="id" ref={id}></input>
        <h4>Galeria de imagenes</h4>
        <label name="imagen">imagen</label>
        <input type="text" name="imagen" ref={img}></input>
        <button
          onClick={(e) => {
            HandleSubmit(e);
          }}
        >
          Enviar
        </button>
      </form>
    </>
  );
};

export default ProductsNew;
