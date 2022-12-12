import React, { useContext } from "react";
import { DataContext } from "../context/Dataprovider";

const Comprobante = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  console.log("Mostrando carrito en el comprobante");

  return (
    <div className="screen-comprobante">
      <h1>Comprobante de compra 🧾</h1>
      <div className="documento-comprobante">
        <div className="listaProductos-comprobante">
          {carrito.map((elemento) => {
            return elemento.titulo;
          })}
        </div>
      </div>
    </div>
  );
};

export default Comprobante;
