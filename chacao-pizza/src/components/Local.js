import React from "react";

const Local = (nombre, ubicacion, ruta, id) => {
  <div className="local">
    {/* <img src={ruta} alt={nombre} /> */}
    <h3>{nombre}</h3>
    <br />
    <p>
      Ubicada en la ciudad {ubicacion[0]} en la comuna de
      {ubicacion[1]} en {ubicacion[2]} #{ubicacion[3]}
    </p>
  </div>;
};

export default Local;
