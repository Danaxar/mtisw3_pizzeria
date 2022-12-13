import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/Dataprovider";
import "./style-pages.css";
import { Carrito } from "../components/Carrito";

const Personalizada = () => {
  const value = useContext(DataContext); // Ocupar las variables globales
  const [productos, setProductos] = value.productos;
  const [carrito, setCarrito] = value.carrito;
  const addCarrito = value.addCarrito; // Para acceder a la FUNCION addCarrito
  const [items] = value.productos;
  const navigate = useNavigate();

  // El item de id=7 es la pizza personalizada
  // La idea es agregar dentro de su atributo "ingredientes"
  // los ingredientes que tenga

  // Datos
  const ingredientesCarnes = [
    "carne",
    "carne mechada",
    "pepperoni",
    "salchicha",
    "jamón",
    "pollo",
    "tocino",
    "ninguno ❌",
  ];

  const ingredientesVegetales = [
    "aceitunas",
    "choclo",
    "piña",
    "cebolla",
    "pimiento",
    "tomate",
    "champiñones",
    "ninguno ❌",
  ];

  const tipoQueso = ["Gouda", "Mozzarella"];
  const cantidadQueso = ["Normal", "Extra", "Doble"];
  const tipoMasa = ["Normal", "Delgada"];
  const tamanoPizza = ["Familiar", "Mediana", "Personal"];

  // Variables de estado
  const [ingredientesCarnesEstado, setIngredientesCarnes] = useState([]);
  const [ingredientesVegetalesEstado, setIngredientesVegetales] = useState([]);
  const [tipoQuesoEstado, setTipoQuesoEstado] = useState([]);
  const [cantidadQuesoEstado, setCantidadQuesoEstado] = useState([]);
  const [tipoMasaEstado, setTipoMasaEstado] = useState([]);
  const [tamanoPizzaEstado, setTamanoPizzaEstado] = useState([]);

  const crearPizzaPersonalizada = () => {
    console.log("Creando pizza personalizada...");
    const salida = [
      ingredientesCarnesEstado,
      ingredientesVegetalesEstado,
      tipoQuesoEstado,
      cantidadQuesoEstado,
      tipoMasaEstado,
      tamanoPizzaEstado,
    ].map((element) => element + ", ");

    if (salida.find((element) => element === ", ")) {
      alert("Rellene todos los campos");
      console.log("Hay un campo vacio");
      return;
    }

    console.log("Características: ", salida); // * BIEN

    // Obtener objeto pizza personalizada
    const pizzaPersonalizada = items.filter((element) => {
      return element.id === 7;
    })[0];

    // Asignar ingredientes
    pizzaPersonalizada.ingredientes = salida;

    console.log("Pizza personalizada: ", pizzaPersonalizada);
    // addCustomPizza(pizzaPersonalizada);
    // addCarrito(pizzaPersonalizada);
    addCarrito(7);
    alert("Producto añadido! 😁");
    // navigate("/comprar");
  };

  return (
    <div>
      <h1 style={{ marginLeft: "35%", fontSize: "3vw" }}>Arma tu pizza</h1>
      <div className="opcionesPizza">
        <div className="Carnes seleccion">
          <div className="seleccionHijo">
            <h2>El tamaño de la pizza 🍕:</h2>
            {tamanoPizza.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="tamano"
                  onChange={(e) => {
                    setTamanoPizzaEstado(e.target.value);
                    // console.log("Estado tamaño pizza: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="tipoMasa seleccion">
          <div className="seleccionHijo">
            <h2>Selecciona el tipo de masa 🍞:</h2>
            {tipoMasa.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="masa"
                  onChange={(e) => {
                    setTipoMasaEstado(e.target.value);
                    // console.log("Tipo de masa: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="tipoQueso seleccion">
          <div className="seleccionHijo">
            <h2>Selecciona el tipo de queso 🧀:</h2>
            {tipoQueso.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="Queso"
                  onChange={(e) => {
                    setTipoQuesoEstado(e.target.value);
                    // console.log("Tipo de queso: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="cantidadQueso seleccion">
          <div className="seleccionHijo">
            <h2>Selecciona la cantidad de queso 🧀:</h2>
            {cantidadQueso.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="cantidadQueso"
                  onChange={(e) => {
                    setCantidadQuesoEstado(e.target.value);
                    // console.log("Cantidad de queso: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="ingredientesCarnes seleccion">
          <div className="seleccionHijo">
            <h2>Selecciona los ingredientes de carnes 🥩:</h2>
            {ingredientesCarnes.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="cantidadCarne"
                  onChange={(e) => {
                    setIngredientesCarnes(e.target.value);
                    // console.log("Ingredientes carnes: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="ingredientesVegetales seleccion">
          <div className="seleccionHijo">
            <h2>Selecciona los ingredientes de vegetales 🍅:</h2>
            {ingredientesVegetales.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="vegetales"
                  onChange={(e) => {
                    setIngredientesVegetales(e.target.value);
                    // console.log("Ingredientes vegetales: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => crearPizzaPersonalizada()}
        style={{
          width: "30vw",
          margin: "3%",
          backgroundColor: "green",
          height: "15vh",
          fontSize: "5vh",
        }}
      >
        Añadir al carrito 🛒
      </button>

      <button
        onClick={() => navigate("/comprar")}
        style={{
          width: "25vw",
          margin: "5%",
          backgroundColor: "rgb(59, 125, 225)",
          height: "10vh",
          fontSize: "5vh",
        }}
      >
        Volver 👈🏻
      </button>
    </div>
  );
};

export default Personalizada;
