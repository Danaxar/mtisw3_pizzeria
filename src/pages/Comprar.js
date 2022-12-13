import { useContext } from "react";
// import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { Carrito } from "../components/Carrito";
import Pizza from "../components/Pizza";
import { DataContext } from "../context/Dataprovider";
import "./style-pages.css";

const Comprar = () => {
  const value = useContext(DataContext);

  // Importar el repositorio de productos
  const [productos] = value.productos;

  return (
    <div>
      <h1 style={{ fontSize: "3vw", marginLeft: "14%" }}>
        Seleccione sus productos 🍕
      </h1>
      <div className="screen">
        <div className="comprar">
          {
            // Aqui muestra todos los productos dentro de Data.js
            productos.map((producto) => (
              <Pizza
                id={producto.id}
                key={producto.id}
                ruta={producto.imagen}
                descripcion={producto.ingredientes}
                alt={producto.titulo}
                precio={producto.precio}
              />
            ))
          }
          <a
            href="/agregado"
            style={{
              textDecoration: "none",
              backgroundColor: "rgb(50,150,110, 0.8)",
              width: "20%",
              margin: "2%",
              marginLeft: "5%",
              borderRadius: "4%",
            }}
          >
            <div className="agregados">
              <div className="descripcionPizza">
                Click aqui para seleccionar tus agregados
                <br />
                <br />
                Bebidas, acompañamientos, salsas, etc.
              </div>
              <br />
            </div>
          </a>

          <a
            href="/personalizada"
            style={{
              textDecoration: "none",
              backgroundColor: "rgb(50,150,110, 0.8)",
              width: "20%",
              margin: "2%",
              marginLeft: "5%",
              borderRadius: "4%",
            }}
          >
            <div className="pizzaPersonalizada">
              <div className="descripcionPizza">
                Click aqui para configurar tu pizza personalizada.
              </div>
              <br />
            </div>
          </a>
        </div>

        <div
          className="carrito"
          style={{
            position: "fixed",
            marginLeft: "65%",
            width: "30%",
            height: "auto",
            backgroundColor: "rgb(200, 6, 9, 0.8)",
            borderRadius: "5%",
          }}
        >
          <Carrito />
          <a href="/pagar">
            <button className="BtnIrComprar">Pagar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Comprar;
