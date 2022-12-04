import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carrito } from "../components/Carrito";
import Pizza from "../components/Pizza";
import { DataContext } from "../context/Dataprovider";
import "./style-pages.css";


const Comprar = () =>{
    // Hay que arreglar el estilo
    const value = useContext(DataContext);
    const [productos] = value.productos
    
    console.log(productos);

    return (
        <div className="screen">
            <div className="comprar">
                {/* <Pizza ruta={"americana"} descripcion="alsa de Tomate, Queso, Pepperoni y Aceitunas Negras." alt="pizza americana" className="Pizza"/>
                {/* <button onClick={setcarrito("americana")} className="carritoButton"/> */}
                
                {/* <Pizza ruta={"hawaiana"} descripcion="Queso mozzarella, piña y jamón." alt="pizza hawaiana"/>
                <Pizza ruta={"mechadaBBQ"} 
                    descripcion="Doble porción de carne mechada, queso mozzarella y queso parmesano y romano" alt="pizza mechadaBBQ"/>
                <Pizza ruta={"veganQueen"} descripcion="Champiñon, pimiento verde, aceitunas negras, Not Meat (carneplant based) y queso vegano." alt="pizza vegan queen"/>
                <Pizza ruta={"BBQChiken"} descripcion="Queso mozzarella, pollo, tocino, cebolla, salsa bbq." alt="pizza BBQ Chiken"/>
                <Pizza ruta={"campesina"} descripcion="Pollo, Pimiento, Champiñón" alt="pizza campesina"/>
                <Pizza ruta={"arma-tu-pizza"} descripcion="Con los ingredientes que tu quieras" alt="arma tu pizza"/> */}

                {
                    productos.map(producto =>(
                        <Pizza
                            key={producto.id}
                            ruta={producto.imagen}
                            descripcion={producto.ingredientes}
                            alt={producto.titulo}
                        />
                    ))
                }
            </div>
            <div className="carrito">
                <Carrito/>
            </div>

        </div>
    );
}

export default Comprar;


/**
 * const Comprar = () =>{
    const [pizza, setPizza] = useState("hawaiana"); // Valor default
    const [contador, setContador] = useState(0);
    
    return (
        <div>
            <div className="comprar">
                <Pizza ruta={pizza} descripcion="hola" alt="pizza hawaiana"/>

                <button onClick={() => setPizza("americana")}>
                    1
                </button>
                <button onClick={() => setPizza("hawaiana")}>
                    2
                </button>
                <button onClick={() => setContador(contador+1)}>
                    {contador}
                </button>
            </div>
            <div className="carrito">
            </div>
        </div>
    );
}
 */