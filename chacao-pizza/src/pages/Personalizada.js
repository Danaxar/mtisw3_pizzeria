import React, { useContext, useState } from "react";
import { DataContext } from "../context/Dataprovider";

const Personalizada = () => {
  const value = useContext(DataContext); // Ocupar las variables globales
  const addCustomPizza = value.addCustomPizza; // Para acceder a la FUNCION addCarrito

  // Datos
  const ingredientesCarnes = [
    "carne",
    "carne mechada",
    "pepperoni",
    "salchicha",
    "jamón",
    "pollo",
    "tocino",
  ];

  const ingredientesVegetales = [
    "aceitunas",
    "choclo",
    "piña",
    "cebolla",
    "pimiento",
    "tomate",
    "champiñones",
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
    const salida = {
      ingredientesCarnes: ingredientesCarnesEstado,
      ingredientesVegetales: ingredientesVegetalesEstado,
      tipoQueso: tipoQuesoEstado,
      cantidadQueso: cantidadQuesoEstado,
      tipoMasa: tipoMasaEstado,
      tamanoPizza: tamanoPizzaEstado,
    };
    console.log(salida);
    addCustomPizza(salida);
  };

  return (
    <div>
      <h1>Arma tu pizza</h1>
      <div className="opcionesPizza">
        <div className="Carnes seleccion">
          <div className="seleccionHijo">
            <h2>El tamaño de la pizza:</h2>
            {tamanoPizza.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="tamano"
                  onChange={(e) => {
                    setTamanoPizzaEstado(e.target.value);
                    console.log("Estado tamaño pizza: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="tipoMasa seleccion">
          <div className="seleccionHijo">
            <h2>Selecciona el tipo de masa:</h2>
            {tipoMasa.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="masa"
                  onChange={(e) => {
                    setTipoMasaEstado(e.target.value);
                    console.log("Tipo de masa: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="tipoQueso seleccion">
          <div className="seleccionHijo">
            <h2>Selecciona el tipo de queso:</h2>
            {tipoQueso.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="Queso"
                  onChange={(e) => {
                    setTipoQuesoEstado(e.target.value);
                    console.log("Tipo de queso: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="cantidadQueso seleccion">
          <div className="seleccionHijo">
            <h2>Selecciona la cantidad de queso:</h2>
            {cantidadQueso.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="cantidadQueso"
                  onChange={(e) => {
                    setCantidadQuesoEstado(e.target.value);
                    console.log("Cantidad de queso: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="ingredientesCarnes seleccion">
          <div className="seleccionHijo">
            <h2>Selecciona los ingredientes de carnes:</h2>
            {ingredientesCarnes.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="cantidadCarne"
                  onChange={(e) => {
                    setIngredientesCarnes(e.target.value);
                    console.log("Ingredientes carnes: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="ingredientesVegetales seleccion">
          <div className="seleccionHijo">
            <h2>Selecciona los ingredientes de vegetales:</h2>
            {ingredientesVegetales.map((element) => (
              <div>
                <label>{element}</label>
                <input
                  value={element}
                  type={"radio"}
                  name="vegetales"
                  onChange={(e) => {
                    setIngredientesVegetales(e.target.value);
                    console.log("Ingredientes vegetales: " + e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button onClick={() => crearPizzaPersonalizada()}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default Personalizada;
