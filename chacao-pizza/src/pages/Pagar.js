import React, { useContext, useState } from "react";
import { DataContext } from "../context/Dataprovider";
import { Carrito } from "../components/Carrito";
import "./style-pages.css";
import { useNavigate } from "react-router-dom";

const Pagar = ({ ListaPizzas }) => {
  const value = useContext(DataContext); // Importamos variables globales
  const [carrito] = value.carrito;

  const metodos_pago = [
    [
      "Efectivo",
      "Se paga en la misma tienda o al momento de entrega en domicilio.",
    ],
    [
      "Tarjeta (débito o crédito)",
      "Se paga en la misma tienda o al momento de entrega en domicilio.",
    ],
    ["Webpay", "Se paga por internet al momento de la compra."],
  ];

  const propinas = ["Nada", "5%", "10%"];
  const comprobantes = ["Boleta", "Factura"];

  // Estados
  const [metodo_pago, setMetodo_pago] = useState([]);
  const [propina, setPropina] = useState([]);
  const [comprobante, setComprobante] = useState([]);

  const navigate = useNavigate();
  const finalizarCompra = () => {
    console.log(
      "Finalizando la compra:\nmetodo de pago: ",
      metodo_pago,
      "\npropina: ",
      propina
    );
    // Hacer un setPago
    // Verificar que se haya marcado algo
    if (
      propina.length === 0 ||
      metodo_pago.length === 0 ||
      comprobante.length === 0
    ) {
      alert("Por favor rellene todos los campos");
      return;
    }

    // Procesar pago
    alert("Pago realizado con exito");
    //! Falta el comprobante
  };

  return (
    <div className="screen_pago">
      <h1>Pago del carrito de compras</h1>
      <div className="lista_productos_pago">
        <Carrito
          style={{
            width: "1px",
          }}
        />
        <button
          onClick={() => {
            navigate("/comprar");
          }}
        >
          Agregar más productos
        </button>
      </div>

      <div className="datosCompra">
        <div className="datosCompra-hijo">
          <h1>Datos de la compra</h1>
          <div className="metodos_pago">
            <h1>Seleccione un método de pago *</h1>
            <div className="metodo_pago_item">
              {metodos_pago.map((element) => (
                <div>
                  <label>{element[0]}</label>
                  <input
                    value={element[0]}
                    type={"radio"}
                    name="metodo_pago"
                    onChange={(e) => {
                      setMetodo_pago(e.target.value);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="propina">
            <h1>Desea añadir propina? *</h1>
            <div className="propina_item">
              {propinas.map((element) => (
                <div>
                  <label>{element}</label>
                  <input
                    value={element}
                    type={"radio"}
                    name="propina"
                    onChange={(e) => setPropina(e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="comprobante">
            <h1>Seleccione un comprobante de pago *</h1>
            <div className="propina_item">
              {comprobantes.map((element) => (
                <div>
                  <label>{element}</label>
                  <input
                    value={element}
                    type={"radio"}
                    name="comprobantePago"
                    onChange={(e) => setComprobante(e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button onClick={() => finalizarCompra()}>Finalizar compra</button>
      </div>
    </div>
  );
};

export default Pagar;
