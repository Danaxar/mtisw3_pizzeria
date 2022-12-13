import React, { useContext, useEffect, useState } from "react";
import "./style-pages.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/Dataprovider";

const Domicilio = () => {
  // importar variables globales
  const value = useContext(DataContext);
  const [ubicacion, setUbicacion] = value.ubicacion;

  // Variables de estado del form
  const [region, setRegion] = useState("");
  const [comuna, setComuna] = useState("");
  const [calle, setCalle] = useState("");
  const [numero, setNumero] = useState("");
  const [numeroDpto, setNumeroDpto] = useState("");

  // Función para actualizar la variable global ubicacion
  const enviarUbicacion = () => {
    const salida = [region, comuna, calle, numero, numeroDpto];
    setUbicacion(salida);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (ubicacion) {
      if (
        !window.confirm("Ya tienes una ubicacion guardada\n¿Deseas cambiarla?")
      ) {
        navigate("/comprar");
      }
    }
  }, []);

  return (
    <div className="screen_domicilio">
      <div className="formDomicilio">
        <h1>Ingrese su ubicación 🗺️📌</h1>
        <div className="domicilioInput">
          <label for="region">Region</label>
          <input
            type={"text"}
            name="Region"
            onChange={(e) => setRegion(e.target.value)}
          />
          <br />
        </div>

        <div className="domicilioInput">
          <label for="Comuna">Comuna</label>
          <input
            type={"text"}
            name="Comuna"
            onChange={(e) => setComuna(e.target.value)}
          />
          <br />
        </div>

        <div className="domicilioInput">
          <label for="Calle">Calle</label>
          <input
            type={"text"}
            name="Calle"
            onChange={(e) => setCalle(e.target.value)}
          />
          <br />
        </div>

        <div className="domicilioInput">
          <label for="Numero">Numero #</label>
          <input
            type={"text"}
            name="Numero"
            onChange={(e) => setNumero(e.target.value)}
          />
          <br />
        </div>

        <div className="domicilioInput">
          <label for="NumeroDpto">NumeroDpto #</label>
          <input
            type={"text"}
            name="NumeroDpto"
            onChange={(e) => setNumeroDpto(e.target.value)}
          />
          <br />
        </div>

        <div className="enviarUbicacion">
          <input
            type={"submit"}
            name="enviar"
            style={{ color: "" }}
            onClick={() => {
              enviarUbicacion();
            }}
          />
          <br />
        </div>
      </div>
      <div className="listarDomicilio">
        <h2>Sus datos:</h2>
        <table>
          <tr>
            <td>Ciudad</td>
            <td>{ubicacion[0]}</td>
          </tr>
          <tr>
            <td>Comuna</td>
            <td>{ubicacion[1]}</td>
          </tr>
          <tr>
            <td>Calle</td>
            <td>{ubicacion[2]}</td>
          </tr>
          <tr>
            <td>numero</td>
            <td>{ubicacion[3]}</td>
          </tr>
          <tr>
            <td>Numero Dpto</td>
            <td>{ubicacion[4]}</td>
          </tr>
        </table>
      </div>

      <div className="domicilio_continuar">
        <button onClick={() => navigate("/comprar")}>Continuar 👉🏻</button>
      </div>
    </div>
  );
};

export default Domicilio;
