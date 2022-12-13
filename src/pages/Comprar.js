import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { Carrito } from "../components/Carrito";
import Pizza from "../components/Pizza";
import { DataContext } from "../context/Dataprovider";
import "./style-pages.css";

const Comprar = () => {
  const value = useContext(DataContext);
  console.log(value);

  // Importar el repositorio de productos
  const [productos] = value.productos;

  const navigate = useNavigate();

  const irAlPago = () => {
    if (value.carrito[0].length === 0) {
      alert("No has añadido productos a tu carro");
      return;
    }
    navigate("/pagar");
  };

  return (
    <div>
      <h1 style={{ fontSize: "3vw", marginLeft: "14%" }}>
        Seleccione sus productos 🍕
      </h1>
      <div className="screen">
        <div className="comprar">
          {
            // Aqui muestra todos los productos dentro de Data.js
            productos.map((producto) =>
              producto.id === 7 ? (
                <div>
                  <a
                    href="/personalizada"
                    style={{
                      textDecoration: "none",
                      backgroundColor: "white",
                      width: "50%",
                    }}
                  >
                    <Pizza
                      id={producto.id}
                      key={producto.id}
                      titulo={producto.titulo}
                      ruta={producto.imagen}
                      descripcion={producto.ingredientes}
                      alt={producto.titulo}
                      precio={producto.precio}
                    />
                    <h1 style={{ fontSize: "3vw", textAlign: "center" }}>
                      Agregados
                    </h1>
                  </a>
                </div>
              ) : (
                <Pizza
                  id={producto.id}
                  key={producto.id}
                  titulo={producto.titulo}
                  ruta={producto.imagen}
                  descripcion={producto.ingredientes}
                  alt={producto.titulo}
                  precio={producto.precio}
                />
              )
            )
          }
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
          <Carrito rutaActual="/comprar" />
          <button className="BtnIrComprar" onClick={() => irAlPago()}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comprar;
