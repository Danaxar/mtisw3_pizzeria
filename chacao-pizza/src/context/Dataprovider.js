import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Data from "./Data";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const producto = Data.items;
    if (producto) {
      setProductos(producto);
    } else {
      setProductos([]);
    }
    setProductos(producto);
  }, []);

  // Guardará datos al carro
  const addCarrito = (id) => {
    // Guarda datos a ese carrito
    const check = carrito.every((item) => {
      return item.id !== id;
    });

    if (check) {
      const data = productos.filter((producto) => {
        return producto.id === id;
      });
      setCarrito([...carrito, ...data]);
    } else {
      alert("El producto ya está en su carrito");
    }
  };

  // Función que añade una pizza personalizada al carrito
  const addCustomPizza = (object) => {
    setCarrito([...carrito, object]);
    console.log("addCustomPizzaORIGINAL: ", [...carrito, object]);
    alert("La pizza ha sido añadida con exito");
    navigate("/comprar");
  };

  const value = {
    productos: [productos],
    addCarrito: addCarrito, // Hacer pública la función
    carrito: [carrito, setCarrito], // Hacer pública la variable carrito
    addCustomPizza: addCustomPizza,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
