import React, { useState } from "react";
import { Carrito } from "../components/Carrito";
import "./style-pages.css";
import { useNavigate } from "react-router-dom";

const Pagar = () => {
  const [correo, setCorreo] = useState("");
  const metodos_pago = [
    "Efectivo 💵",
    "Tarjeta (débito o crédito) 💳",
    "Webpay 💻",
  ];

  const propinas = ["Nada 😢", "5% 😊", "10% 🥰"];
  const comprobantes = ["Boleta 🧾", "Factura 📋"];

  // Estados
  const [metodo_pago, setMetodo_pago] = useState([]);
  const [propina, setPropina] = useState([]);
  const [comprobante, setComprobante] = useState([]);
  const [pagado, setPagado] = useState(false);

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
    alert(
      "Pago realizado con exito, se ha enviado el comprobante a su correo " +
        correo
    );
    setPagado(true);
    //! Falta el comprobante
  };

  return (
    <div className="pantalla_pago">
      <h1 style={{ fontSize: "3vw", marginLeft: "35%" }}>
        Finalice su compra 🍕
      </h1>
      <div className="screen_pago">
        <div className="lista_productos_pago">
          <Carrito
            style={{
              width: "1px",
            }}
          />
        </div>

        <div className="datosCompra">
          <h1 style={{ marginLeft: "30%", fontSize: "1.5vw" }}>
            Datos de la compra 🛍️
          </h1>
          <div className="datosCompra-hijo">
            <div className="metodos_pago compraItem">
              <h1 style={{ fontSize: "1.5vw" }}>
                Seleccione un método de pago *
              </h1>
              <div className="metodo_pago_item">
                {metodos_pago.map((element) => (
                  <div className="agrandarLetraLabel">
                    <label>{element}</label>
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

            <div
              className="propina compraItem"
              style={{ marginTop: "5%", marginBottom: "5%" }}
            >
              <h1 style={{ fontSize: "1.5vw" }}>Desea añadir propina? *</h1>
              <div className="propina_item">
                {propinas.map((element) => (
                  <div className="agrandarLetraLabel">
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

            <div className="comprobante compraItem">
              <h1 style={{ fontSize: "1.5vw" }}>
                Seleccione un comprobante de pago *
              </h1>
              <div className="propina_item">
                {comprobantes.map((element) => (
                  <div className="agrandarLetraLabel">
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
          <label
            style={{ marginRight: "5%" }}
            onChange={(e) => setCorreo(e.target.value)}
          >
            Correo electronico
          </label>
          {console.log(correo)}
          <input type={"text"} name="correo" />

          <button
            className="botonFinalizarCompra"
            onClick={() => finalizarCompra()}
          >
            Finalizar compra 💸
          </button>
          <button
            className="botonVolver"
            onClick={() => {
              navigate("/comprar");
            }}
          >
            Volver 👈🏻
          </button>
          {/* {pagado === true ? (
            <button
              style={{
                backgroundColor: "#fefefe",
                color: "black",
                fontSize: "2vw",
                height: "10vh",
                width: "30vw",
                fontWeight: "bold",
              }}
              onClick={() => navigate("/comprobante")}
            >
              Mostrar comprobante
            </button>
          ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default Pagar;
