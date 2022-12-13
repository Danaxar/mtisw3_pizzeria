import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/Dataprovider";
import "./style-pages.css";

const Agregado = () => {
  const value = useContext(DataContext); // Ocupar las variables globales
  const addCarrito = value.addCarrito; // Para acceder a la FUNCION addCarrito
  const [items] = value.productos; // Importar el repositorio de productos
  const navigate = useNavigate();

  // El item de id=8 son los agregados totales
  // La idea es agregar dentro de su atributo "ingredientes"
  // los agregados que tenga

  // Datos
  const bebidas = ["Coca cola", "Fanta"];

  const jugos = ["Watts Durazno", "Watts Piña"];

  const aguas = ["Cachantun con Gas", "Cachantun sin Gas"];
  const salsas = ["Salsa BBQ", "Salsa Garlic", "Salsa Picante", "Salsa Tomate"];

  // Variables de estado
  const [bebida, setBebida] = useState([]);
  const [jugo, setJugo] = useState([]);
  const [agua, setAgua] = useState([]);
  const [salsa, setSalsa] = useState([]);

  // Funció que es activada por un botón
  const agregado = () => {
    console.log("Creando agregado...");
    const salida = [bebida, jugo, agua, salsa].map((element) => element + ", ");
    console.log("Características: ", salida);

    // Obtener objeto agregado
    const pizzaPersonalizada = items.filter((element) => {
      return element.id === 8;
    })[0];

    // Asignar ingredientes
    pizzaPersonalizada.ingredientes = salida;

    console.log("Agregado: ", pizzaPersonalizada);
    addCarrito(pizzaPersonalizada); // Añadir al carro
    navigate("/comprar"); // Redirigir a la página de compra
  };

  return (
    <div>
      <h1 style={{ marginLeft: "35%", fontSize: "3vw" }}>
        Escoge tus agregados
      </h1>
      <div className="opcionesPizza">
        <div className="Bebidas seleccion">
          <div className="seleccionHijo">
            <h2>Selecciona la bebida de tu preferencia:</h2>
            {bebidas.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="bebida"
                  onChange={(e) => {
                    setBebida(e.target.value);
                    console.log("Bebida: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="tipoMasa seleccion">
          <div className="seleccionHijo">
            <h2>Selecciona el jugo de tu preferencia:</h2>
            {jugos.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="masa"
                  onChange={(e) => {
                    setJugo(e.target.value);
                    console.log("Jugo: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="tipoQueso seleccion">
          <div className="seleccionHijo">
            <h2>Selecciona el agua de tu preferencia:</h2>
            {aguas.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="Queso"
                  onChange={(e) => {
                    setAgua(e.target.value);
                    console.log("Agua: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="cantidadQueso seleccion">
          <div className="seleccionHijo">
            <h2>Selecciona la salsa de tu preferencia:</h2>
            {salsas.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="cantidadQueso"
                  onChange={(e) => {
                    setSalsa(e.target.value);
                    console.log("Salsa: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => agregado()}
        style={{
          width: "30vw",
          margin: "5%",
          backgroundColor: "green",
          height: "15vh",
        }}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default Agregado;
