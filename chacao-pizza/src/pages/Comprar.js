import React, { useState } from "react";
import Pizza from "../components/Pizza";
import "./Comprar.css"

const Comprar = () =>{
    // Hay que arreglar el estilo
    return (
        <div className="screen">
            <div className="comprar">
                <Pizza ruta={"americana"} descripcion="alsa de Tomate, Queso, Pepperoni y Aceitunas Negras." alt="pizza americana" className="Pizza"/>
                <Pizza ruta={"hawaiana"} descripcion="Queso mozzarella, piña y jamón." alt="pizza hawaiana"/>
                <Pizza ruta={"mechadaBBQ"} 
                    descripcion="Doble porción de carne mechada, queso mozzarella y queso parmesano y romano" alt="pizza mechadaBBQ"/>
                <Pizza ruta={"veganQueen"} descripcion="Champiñon, pimiento verde, aceitunas negras, Not Meat (carneplant based) y queso vegano." alt="pizza vegan queen"/>
                <Pizza ruta={"BBQChiken"} descripcion="Queso mozzarella, pollo, tocino, cebolla, salsa bbq." alt="pizza BBQ Chiken"/>
                <Pizza ruta={"campesina"} descripcion="Pollo, Pimiento, Champiñón" alt="pizza campesina"/>
            </div>
            <div className="carrito">
                <h1>Carrito</h1>
                
                <div className="carritoHijo">
                    <h2>Productos</h2>
                    <div className="carritoElement">
                        Lista productos 
                        {/* Aqui van los elementos  */}
                    </div>
                    <div className="carritoElement">
                        total
                    </div>
                    <button className="carritoElement">
                        pagar
                    </button>
                </div>
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