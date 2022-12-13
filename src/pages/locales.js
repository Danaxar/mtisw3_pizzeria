import React, { useContext } from "react";
import { DataContext } from "../context/Dataprovider";

const Locales = () => {
  const value = useContext(DataContext);
  const [locals] = value.locales; // BD

  return (
    <div className="screen-locales" style={{ height: "1000px" }}>
      <h1
        style={{ textAlign: "center", fontSize: "2.5vw", marginBottom: "1%" }}
      >
        Nuestros locales
      </h1>
      {locals.map((element) => (
        <div className="localItem">
          <div className="imagenLocal">
            <img
              src={require("../components/imagenesLocales/" +
                element.imagen +
                ".jpg")}
              alt="local"
              style={{ borderRadius: "30px 30px 30px 30px", marginLeft: "20%" }}
            />
          </div>
          <div className="textoLocal">
            <h1 style={{ color: "green" }}>{element.nombre}</h1>
            <div className="descripcionLocal">
              Local ubicado en la ciudad de {element.ubicacion[0]} en la comuna
              de {element.ubicacion[1]}, {element.ubicacion[2]}#
              {element.ubicacion[3]}
              <br></br>
              <br></br>
              {element.descripcion}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Locales;
