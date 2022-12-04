import React, {useState, useEffect, createContext } from "react";

export const Carrito = () => {
    return (
        <div className="carritos">
            <div className="carrito">
                <div className="carrito_close">
                    {/* icono de cerrar */}
                </div>
                <h2>Carro de compras</h2>
                <div className="carrito_center">


                    <div className="carrito_item">
                        <img src={require("./pizzas/hawaiana.jpg")} alt=""/>
                        <div>
                            <h3>Title</h3>
                            <p className="price">12345</p>
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid"/>
                            <p className="cantidad">1</p>
                            {/* Icono de flecha para abajo */}
                        </div>
                        <div className="remove_item">
                            {/* icono de basura */}
                        </div>
                    </div>
                </div>
                <div className="carrito_footer">
                    <h3>Total $123123</h3>
                    <button className="btn">Payment</button>
                </div>
            </div>
        </div>
    )

}

