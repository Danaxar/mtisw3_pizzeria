import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Data from "./Data";

export const DataContext = createContext();

export const DataProvider = (props) => {
  // Variables globales
  const [productos, setProductos] = useState([]); // Base de datos de pizzas
  const [carrito, setCarrito] = useState([]); // Productos que se quieren comprar
  const [total, setTotal] = useState(0); // Se inicializa en 0

  const [ubicacion, setUbicacion] = useState([]); // Aqui va la ubicación del domicilio // Lista de length = 4 (ciudad, comuna, calle, numero)
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

  useEffect(() => {
    // Leer
    const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"));
    if (dataCarrito) {
      setCarrito(dataCarrito); // Si ya existe algo previamente, se guarda
    }
  }, []);

  useEffect(() => {
    // Escribir
    // localStorage.setItem() // Guarda dentro del local Store
    localStorage.setItem("dataCarrito", JSON.stringify(carrito));
  }, [carrito]); // Se ejecuta cada vez que haya un cambio en el carrito

  useEffect(() => {
    const getTotal = () => {
      // Función para calcular el total
      const res = carrito.reduce((prev, item) => {
        return prev + item.price * item.cantidad;
      }, 0);
      setTotal(res); // Asigno el total guardado en res
    };

    getTotal(); // Llamo a la función que acabo de crear
  }, [carrito]);

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
    total: [total, setTotal],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
