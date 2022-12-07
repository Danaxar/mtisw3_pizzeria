import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Data from "./Data";

export const DataContext = createContext();

export const DataProvider = (props) => {
  // Variables globales
  const [productos, setProductos] = useState([]); // Base de datos de pizzas
  const [carrito, setCarrito] = useState([]); // Productos que se quieren comprar

  const [ubicacion, setUbicacion] = useState([]);
  const [local, setLocal] = useState(""); // Aqui va el id del local

  // Importación de funciones
  const navigate = useNavigate(); // Permite hacer una redirección

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
      // Filtrar por id
      const data = productos.filter((producto) => {
        return producto.id === id;
      }); // -> Retorna un elemento en data
      const salida = [...carrito, ...data];
      console.log("addCarrito (Dataprovider: salida", salida);
      setCarrito(salida); // Se guarda el elemento en data
    } else {
      alert("El producto ya está en su carrito");
    }
  };

  // Función que añade una pizza personalizada al carrito
  const addCustomPizza = (object) => {
    setCarrito([...carrito, object]);
    console.log("addCustomPizzaORIGINAL: ", [...carrito, object]);
    console.log("carrito original final: ", carrito);
    alert("La pizza ha sido añadida con exito");
    // navigate("/comprar");
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
