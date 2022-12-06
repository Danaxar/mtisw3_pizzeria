import React from "react";
import "./style-components.css";
import { Link } from "react-router-dom";
import { DataContext } from "../context/Dataprovider";
import { useContext } from "react";

export default function Pizza({ id, ruta, descripcion, asdf, precio }) {
  const value = useContext(DataContext); // Ocupar las variables globales
  const addCarrito = value.addCarrito; // Para acceder a la FUNCION addCarrito

  return (
    <div className="pizza">
      <div className="ruta" style={{ fontSize: "1.9vw", marginLeft: "20%" }}>
        {ruta.toUpperCase()}
      </div>

      <img src={require("./pizzas/" + ruta + ".jpg")} alt={asdf} />

      <div className="descripcionPizza">{descripcion}</div>
      <br />

      <div className="precio">{"$" + precio + " clp"}</div>

      <button
        className="hola"
        style={{
          width: "100%",
          backgroundColor: "#e25414",
        }}
        onClick={() => addCarrito(id)}
      >
        <box-icon name="cart-add" />
      </button>
    </div>
  );
}
