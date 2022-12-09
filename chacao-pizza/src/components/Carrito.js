import React, { useState, useEffect, createContext, useContext } from "react";
import Data from "../context/Data";
import { DataContext } from "../context/Dataprovider";
import "./style-components.css";

export const Carrito = () => {
  // Importar las variables globales
  const value = useContext(DataContext);
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total; // Precio total del carro de compras

  const resta = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
      setCarrito([...carrito]);
    });
  };

  // El numero de cantidad me lo marca como error porque no he implementado
  // el atributo de cantidad en los productos de Data.js

  const suma = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      setCarrito([...carrito]);
    });
  };

  const removeProducto = (id) => {
    if (window.confirm("¿Quieres quitar el producto?")) {
      // Se abre ventana de dialogo
      // Por cada item en el carrito
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1; // Se inicializa en 1
          carrito.splice(index, 1); // Eliminar todo el carrito hasta ese id
        }
      });
      setCarrito([...carrito]);
    }
  };

  return (
    <div className="carritos">
      <div className="carrito">
        <div className="carrito_close">{/* icono de cerrar */}</div>
        <h2 style={{ fontSize: "3vw" }}>Carro de compras</h2>
        <div className="carrito_center">
          {carrito.length === 0 ? (
            <h2
              style={{
                textAign: "center",
                fontSize: "3rem",
              }}
            >
              {" "}
              Carrito vacío
            </h2>
          ) : (
            <>
              {
                // Variable = producto
                carrito.map((producto) => (
                  <div
                    className="carrito_item"
                    key={producto.id}
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)),url('" +
                        producto.imagen +
                        ".jpg')",
                      // backgroundColor: "black",
                    }}
                  >
                    {/* <img
                      src={require("./pizzas/" + producto.imagen + ".jpg")}
                      alt="item"
                    /> */}
                    <div>
                      <h3>{producto.titulo}</h3>
                      <p className="price">{"$" + producto.precio} </p>
                    </div>
                    <div>
                      <box-icon
                        name="up-arrow"
                        type="solid"
                        onClick={() => suma(producto.id)}
                      />
                      <p className="cantidad"> {producto.cantidad} </p>
                      <box-icon
                        name="down-arrow"
                        type="solid"
                        onClick={() => resta(producto.id)}
                      />
                    </div>
                    <button
                      className="remove_item"
                      onClick={() => removeProducto(producto.id)}
                    >
                      <box-icon type="solid" name="trash"></box-icon>
                    </button>
                  </div>
                ))
              }
            </>
          )}
        </div>
        <div className="carrito_footer">
          {console.log("total: ", total)}
          {console.log("value total: ", value.total)}
          <h3>Total ${total}</h3>
        </div>
      </div>
    </div>
  );
};
