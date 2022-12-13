import React, { useContext } from "react";
import { DataContext } from "../context/Dataprovider";
// import Local from "../components/Local";

const RetiroTienda = () => {
  const value = useContext(DataContext);

  // Importar el repositorio de locales
  const [locales] = value.locales;
  console.log("locales:", locales);

  return (
    <div>
      <h1>Escoge tu local de retiro</h1>
      <div className="listaLocales">
        {
          // Aqui se muestran todos los locales en Data.js
          // locales.map((local) => (
          // <Local
          //   nombre={local.nombre}
          //   ubicacion={local.ubicacion}
          //   key={local.id}
          //   id={local.id}
          // />
          // ))
        }
      </div>
    </div>
  );
};

export default RetiroTienda;
