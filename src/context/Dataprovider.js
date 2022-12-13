import React, { useState, useEffect, createContext } from "react";
import Data from "./Data";

// Esto es lo que hay que importar usando el useContext()
// Ej: const value = useContext(DataContext)
export const DataContext = createContext();

//! El DataProvider no se importa!
export const DataProvider = (props) => {
  // Variables globales
  const [productos, setProductos] = useState([]); // Base de datos de pizzas
  const [carrito, setCarrito] = useState([]); // Productos que se quieren comprar
  const [total, setTotal] = useState(0); // Total del precio del carro de compras

  const [ubicacion, setUbicacion] = useState([]); // Aqui va la ubicación del domicilio // Lista de length = 4 (ciudad, comuna, calle, numero)
  const [locales, setLocales] = useState([]); // Aqui va el id del local

  // Cargar la base de datos de productos a la variable de estado producto
  useEffect(() => {
    console.log("Cargando items...");
    const producto = Data.items; // Asi de simple
    if (producto) {
      setProductos(producto);
    } else {
      setProductos([]);
    }
    setProductos(producto);
  }, []);

  // ------------------- CARRO ------------------
  // Leer la memoria y guardar en el carro
  useEffect(() => {
    // console.log("Leyendo memoria y cargando el carro...");
    // Leer
    const dataCarrito = JSON.parse(localStorage.getItem("carrito"));
    // Agarra el texto almacenado en la variable dataCarrito
    // Y luego lo parchea a formato json (objeto) y se guarda en dataCarrito
    setCarrito(dataCarrito); // Si ya existe algo previamente, guardalo en el carro
  }, []);

  // Leer el carro y guardar en la memoria
  useEffect(() => {
    // console.log("Leyendo el carro y escribiendo en memoria...");
    localStorage.setItem("carrito", JSON.stringify(carrito));
    // Guarda en la variable dataCarrito la información parcheada de carrito (se convierte a string)
  }, [carrito]); // Se ejecuta cada vez que haya un cambio en el carrito

  // Calcular el monto total del carro
  useEffect(() => {
    const getTotal = () => {
      // Función para calcular el total
      console.log("GetTotal: ", carrito); //! Aqui está el error: Carrito es nulo
      if (carrito === [] || carrito === null) {
        return;
      }
      const res = carrito.reduce((prev, item) => {
        return prev + item.precio * item.cantidad;
      }, 0);
      setTotal(res); // Asigno el total guardado en res
    };
    getTotal(); // Llamo a la función que acabo de crear
  }, [carrito]);

  // Guardará datos al carro
  const addCarrito = (id) => {
    console.log("Añadiendo al carro... " + id);
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

  // Cargar locales
  useEffect(() => {
    console.log("Cargando locales de retiro...");
    const localess = Data.locales;
    setLocales(localess);
  }, []);

  // ------------------- Ubicacion ------------------
  // Leer variable ubicacion y escribirla en memoria cada vez que
  // Se actualiza la variable ubicación
  useEffect(() => {
    const ubicacionJSON = JSON.parse(localStorage.getItem("ubicacion"));
    setUbicacion(ubicacionJSON);
  }, []);

  useEffect(() => {
    console.log("Leyendo <ubicacion> y escribiendo en memoria...");
    localStorage.setItem("ubicacion", JSON.stringify(ubicacion));
  }, [ubicacion]);

  // Leer memoria y escribir ubicacion

  // -------------- EXPORTAR ------------------
  const value = {
    productos: [productos, setProductos],
    addCarrito: addCarrito, // Hacer pública la función
    carrito: [carrito, setCarrito], // Hacer pública la variable carrito
    total: [total, setTotal],
    locales: [locales, setLocales],
    setUbicacion: setUbicacion,
    ubicacion: [ubicacion, setUbicacion],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
