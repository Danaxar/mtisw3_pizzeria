import React from 'react'

// Base de datos
const Data = {
    status: "success",
    items: [
        {
            id: 1,
            titulo: "Pizza americana",
            ingredientes: [
                "Salsa de tomate, ",
                "Queso, ",
                "Pepperoni y Aceitunas negras"
            ],
            precio: 15990,
            imagen: "americana", // Nombre de la imagen sin extension
        },
        {
            id: 2,
            titulo: "Pizza BBQ Chicken",
            ingredientes: [
                "Queso mozzarella, ",
                "Pollo, ",
                "Tocino, ",
                "Ceblolla, ",
                "Salsa BBQ"
            ],
            precio: 15990,
            imagen: "BBQChiken"
        },{
            id: 3,
            titulo: "Pizza Campesina",
            ingredientes: [
                "Pollo, ",
                "Pimiento, ",
                "Champiñón"
            ],
            precio: 15990,
            imagen: "campesina"
        },{
            id: 4,
            titulo: "Pizza hawaiana",
            ingredientes: [
                "Queso mozzarella, ",
                "Piña, ",
                "Jamón"
            ],
            precio: 15990,
            imagen: "hawaiana"
        },{
            id: 5,
            titulo: "Mechada BBQ",
            ingredientes: [
                "Doble porción de carne mechada, ",
                "queso mozzarella, ",
                "Queso parmesano y romano"
            ],
            precio: 15990,
            imagen: "mechadaBBQ"
        },{
            id: 6,
            titulo: "Pizza Vegan Queen",
            ingredientes: [
                "Champiñon, ",
                "pimiento verde, ", 
                "aceitunas negras, ", 
                "Not Meat (carneplant based) y queso vegano."
            ],
            precio: 15990,
            imagen: "veganQueen"
        },{
            id: 7,
            titulo: "Pizza personalizada",
            ingredientes: [
                "A eleccion"
            ],
            precio: 15990,
            imagen: "arma-tu-pizza"
        },
    ]
}

export default Data;