import React from "react";
import "./style-components.css";
import { DataContext } from "../context/Dataprovider";
import { useContext } from "react";

export default function Pizza({ id, ruta, descripcion, asdf, precio }) {
  const value = useContext(DataContext); // Ocupar las variables globales
  const addCarrito = value.addCarrito; // Para acceder a la FUNCION addCarrito

  return (
    <div className="pizza">
      <div className="ruta" style={{ fontSize: "1.6vw", marginLeft: "16%" }}>
        {ruta.toUpperCase()}
      </div>
      <img src={require("./pizzas/" + ruta + ".jpg")} alt={asdf} />
      <div className="descripcionPizza">{descripcion}</div> <br></br>
      <div className="precio" style={{ marginLeft: "30%" }}>
        {"$" + precio + " clp"}
      </div>
      <div
        className="sssss"
        style={{
          width: "100%",
          backgroundColor: "#e25414",
        }}
        onClick={() => addCarrito(id)}
      >
        {/* <box-icon */}
        {/* name="cart-add" */}
        <div
          style={{
            marginLeft: "40%",
            height: "100%",
            color: "black",
            fontSize: "2.2vw",
          }}
        >
          🛒
        </div>
      </div>
    </div>
  );
}
