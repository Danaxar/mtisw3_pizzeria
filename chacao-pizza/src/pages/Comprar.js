import { useContext, useState } from "react";
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
  console.log("Productos", productos);

  // Importar el carrito
  const [carrito] = value.carrito;
  console.log("Carrito", carrito);

  // Use effect aprovecha las recargas del navegador

  return (
    <div className="screen">
      <div className="comprar">
        {
          // Aqui muestra todos los productos dentro de Data.js
          productos.map((producto) => (
            // Componente Pizza
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
            <div
              className="ruta"
              style={{ fontSize: "1.9vw", marginLeft: "20%" }}
            >
              Pizza personalizada
            </div>

            <div className="descripcionPizza">
              Click aqui para configurar tu pizza personalizada.
              <br />
              <br />
              click aqui
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
      </div>
    </div>
  );
};

export default Comprar;
