import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/Dataprovider";
import "./style-pages.css";
// import Local from "../components/Local";

const RetiroTienda = () => {
  const value = useContext(DataContext);
  const [localRetiro, setLocalRetiro] = value.localRetiro; // Importar variable global estado local de retiro
  const [locales] = value.locales; // Importar el repositorio de locales

  // Estado de esta vista
  const [eleccion, setEleccion] = useState([]);

  useEffect(() => {
    console.log(localRetiro);
  }, [localRetiro]);

  const navigate = useNavigate();

  const finish = () => {
    // Pasar la variable de estado local a la global
    setLocalRetiro(eleccion);

    alert("Eleccion guardada con exito: " + eleccion);

    // Redirigir a la compra de pizzas
    navigate("/comprar");
  };

  return (
    <div className="screen-locales" style={{ height: "1000px" }}>
      <h1
        style={{ textAlign: "center", fontSize: "2.5vw", marginBottom: "1%" }}
      >
        Nuestros locales
      </h1>
      {locales.map((element) => (
        <div className="localItem">
          <input
            value={element}
            type={"radio"}
            name="local"
            onChange={(e) => {
              console.log(e);
              setEleccion(e.target.value);
            }}
          />
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
      <button
        style={{
          backgroundColor: "green",
          marginLeft: "50%",
          fontSize: "2vw",
          position: "absolute",
          bottom: "50px",
        }}
        onClick={() => finish()}
      >
        Continuar
      </button>
    </div>
  );
};

export default RetiroTienda;
