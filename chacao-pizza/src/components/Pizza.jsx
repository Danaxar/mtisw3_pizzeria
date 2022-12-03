import React from "react";
import "./Pizza.css";

export default function Pizza({ ruta, descripcion, asdf }) {
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
