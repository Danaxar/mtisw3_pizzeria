import React from "react";
import "./style-components.css";
import { Link } from "react-router-dom";
import { DataContext } from "../context/Dataprovider";
import { useContext } from "react";

export default function Pizza({ ruta, descripcion, asdf }) {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <div className="pizza">
      <div
        style={{
          color: "red",
        }}
      >
        {ruta}
      </div>

      <img src={require("./pizzas/" + ruta + ".jpg")} alt={asdf} />

      <div>{descripcion}</div>
      <br />
    </div>
  );
}
